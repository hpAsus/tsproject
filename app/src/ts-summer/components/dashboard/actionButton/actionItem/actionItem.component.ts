import {Component}   from 'wk-ng/decorators/component';
import {template} from './actionItem.tpl';
import {Input} from 'wk-ng/decorators/input';
import {Output} from 'wk-ng/decorators/output';


@Component({
    selector: 'ts-action-item',
    template: template,
    directives: []
})
export class ActionItemComponent {
    @Input() actionTitle: string;
    @Output() action: Function;
    @Output() callback: Function;
    @Output() errorCallback: Function;

    title: string;

    firstDelay: number = 3 * 1000;
    checkInterval: number = 5 * 1000;
    finalCheckDelay: number = 60 * 1000;

    firstRun: boolean = true;
    promiseCompleted: boolean = false;
    promiseError: boolean = false;
    clicked: boolean = false;
    checkIntervalID: ng.IPromise<any>;

    loadingActiveClass: string;

    // Statuses
    // 0 - Play (Default)
    // 1 - In progress (loading)
    // 2 - Success
    // 3 - Error
    statuses: Array<string> = ['play', 'progress', 'success', 'error'];
    currentStatus: string = this.statuses[0];

    constructor(private $timeout: ng.ITimeoutService,
                private $interval: ng.IIntervalService) {

        // console.log(this.action);
        // console.log(this.callback);
        // console.log(this.errorCallback);
        // console.log('\n\n');
    }

    // Set status
    setStatus(status: number): void {
        this.currentStatus = this.statuses[status];
    }

    // Process promise
    processPromise(): boolean {
        if (this.promiseCompleted) {

            if (this.promiseError) {
                this.setStatus(3);
                this.errorCallback();
            } else {
                this.setStatus(2);
                this.callback();
            }
            // this.promiseError ? this.setStatus(3) : this.setStatus(2);
            this.firstRun = false;
            return true;
        } else {
            return false;
        }
    }

    // Start Action
    actionStart(): void {
        if (!this.clicked) {
            let promise: Function = this.action;
            if (this.firstRun) {

                console.log('Action Fired', this.action);

                this.action().then((): void => {
                    this.promiseCompleted = true;
                    console.log('success promise');
                }).catch((): void => {
                    this.promiseCompleted = true;
                    this.promiseError = true;
                    console.log('error promise');
                });

                this.setStatus(1);

                // start delay
                this.$timeout((): void => {
                    if (!this.processPromise()) {
                        this.checkIntervalID = this.$interval( (): void => {
                            if (this.processPromise()) {
                                this.$interval.cancel(this.checkIntervalID);
                            }
                        }, this.checkInterval);

                        // Final check
                        this.$timeout((): void => {
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
