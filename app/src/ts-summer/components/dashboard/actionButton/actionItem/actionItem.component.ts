import {Component}   from 'wk-ng/decorators/component';
import {template} from './actionItem.tpl';
import {Input} from 'wk-ng/decorators/input';


@Component({
    selector: 'ts-action-item',
    template: template,
    directives: []
})
export class ActionItemComponent {
    @Input('@actionTitle') actionTitle: string;
    @Input('=ngModel') promise: Function;

    firstDelay: number = 3 * 1000;
    checkInterval: number = 5 * 1000;
    finalCheckDelay: number = 60 * 1000;

    firstRun: boolean = true;
    promiseCompleted: boolean = false;
    promiseError: boolean = false;
    clicked: boolean = false;
    checkIntervalID: number;

    callback: Function;
    errorCallback: Function;
    loadingActiveClass: string;

    // Statuses
    // 0 - Play (Default)
    // 1 - In progress (loading)
    // 2 - Success
    // 3 - Error
    statuses: Array<string> = ['play', 'progress', 'success', 'error'];
    currentStatus: string = this.statuses[0];

    constructor(private $timeout: ng.ITimeoutService) {

    }

    // Set status
    setStatus(status: number): void {
        this.currentStatus = this.statuses[status];
    }

    // Process promise
    processPromise(): boolean {
        if (this.promiseCompleted) {
            this.promiseError ? this.setStatus(3) : this.setStatus(2);
            this.firstRun = false;
            return true;
        } else {
            return false;
        }
    }

    // Start Action
    actionStart(): void {
        if (!this.clicked) {
            let promise: Function = this.promise;
            if (this.firstRun) {
                promise().then(function (): void {
                    this.promiseCompleted = true;
                }).catch(function (): void {
                    this.promiseCompleted = true;
                    this.promiseError = true;
                });

                this.setStatus(1);

                // start delay
                this.$timeout(function (): void {
                    if (!this.processPromise()) {
                        this.checkIntervalID = this.$interval(function (): void {
                            if (this.processPromise()) {
                                this.$interval.cancel(this.checkIntervalID);
                            }
                        }, this.checkInterval);

                        // Final check
                        this.$timeout(function (): void {
                            if (this.checkIntervalID) {
                                this.$interval.cancel(this.checkIntervalID);
                            }
                            if (!this.processPromise()) {
                                this.setStatus(3);
                            }
                        }, this.finalCheckDelay);

                    }
                }, this.firstDelay);
                this.firstRun = false;
            }

            this.clicked = true;
        }
    }

}
