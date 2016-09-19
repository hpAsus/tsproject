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
    @Output() callback: () => Promise<any>;
    @Output() errorCallback: () => Promise<any>;
    firstDelay: number = 3 * 1000;
    checkInterval: number = 5 * 1000;
    finalCheckDelay: number = 60 * 1000;
    promiseCompleted: boolean = false;
    promiseError: boolean = false;
    active: boolean = false;
    checkIntervalID: ng.IPromise<any>;

    loadingActiveClassName: string = 'ts-action-loading';
    loadingAnimationClass: string;

    // Statuses
    // 0 - Play (Default)
    // 1 - In progress (loading)
    // 2 - Success
    // 3 - Error
    statuses: Array<string> = ['play', 'progress', 'success', 'error'];
    currentStatus: string = this.statuses[0];

    constructor(private $timeout: ng.ITimeoutService,
                private $interval: ng.IIntervalService) {
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
            this.loadingAnimationClass = '';
            this.active = false;
            return true;
        } else {
            return false;
        }
    }

    // Start Action
    actionStart(): void {
        // this.active = true;
        if (!this.active) {
            this.active = true;

            this.action().then((): void => {
                this.promiseCompleted = true;
            }).catch((): void => {
                this.promiseCompleted = true;
                this.promiseError = true;
            });

            this.setStatus(1);
            this.loadingAnimationClass = this.loadingActiveClassName;

            // start delay
            this.$timeout((): void => {
                if (!this.processPromise()) {
                    this.checkIntervalID = this.$interval((): void => {
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
                            this.loadingAnimationClass = '';
                            this.setStatus(3);
                        }
                    }, this.finalCheckDelay);

                }
            }, this.firstDelay);

        }
    }

}
