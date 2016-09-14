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

    firstDelay: number = 3 * 1000;
    finalCheckDelay: number = 60 * 1000;
    firstTimeout: number;
    lastTimeout: number;
    clicked: boolean = false;
    actionPromise: Promise<any>;
    callback: Function;
    errorCallback: Function;
    loadingActiveClass: string;
    // Statuses
    // 0 - Play (Default)
    // 1 - In progress (loading)
    // 2 - Success
    // 3 - Error
    statuses: Array<string> = ['play', 'progress', 'success', 'error'];
    currentStatus = this.statuses[0];

    constructor(private $timeout: ng.ITimeoutService) {

    }

    // Set status
    setStatus(status: number): void {
        this.currentStatus = this.statuses[status];
    }

    // Start Action
    actionStart(): void {
        if (!this.clicked) {
            this.setStatus(1);
            this.loadingActiveClass = 'ts-action-loading';
            actionPromise = scope.ngModel();
            callback = scope.callback;
            errorCallback = scope.errorCallback;

            this.firstTimeout = this.$timeout(angular.noop, this.firstDelay);
            this.lastTimeout = this.$timeout(angular.noop, this.finalCheckDelay);

            this.firstTimeout.then(function () {
                    return $q.race([actionPromise, lastTimeout]);
                })
                .then(function (res) {
                    if (res) {
                        //setting status based on res success
                        this.setStatus(res.data.success ? 2 : 3);
                        this.loadingActiveClass = '';
                    } else {
                        // final check error with no response
                        this.setStatus(3);
                        this.loadingActiveClass = '';
                    }
                    if (this.callback) {
                        this.callback();
                    }
                    this.clicked = false;
                    // clear last timeout
                    $timeout.cancel(lastTimeout);
                })
                .catch(function (err) {
                    // if something go wrong on serverside
                    if (this.errorCallback) {
                        this.errorCallback();
                    }
                    this.setStatus(3);
                    this.loadingActiveClass = '';
                });

            this.clicked = true;
        }
    }

}
