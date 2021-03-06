import {Component} from 'wk-ng/decorators/component';
import {template} from './actionButtonTest.tpl';
import {ActionButtonComponent} from '../actionButton/actionButton.component';
import {ActionButtonService} from '../actionButton/actionButton.service';
import {ToastService} from '../../../services/toast-service';

@Component({
    selector: 'action-button-test-component',
    template: template,
    directives: [ActionButtonComponent],
    providers: [ActionButtonService]
})
export class ActionButtonTestComponent {
    ab: ActionButtonTestComponent = this;
    button1: string = 'button1';
    button2: string = 'button2';
    testActions1: Array<IActionButton.IActionItem>;
    testActions2: Array<IActionButton.IActionItem>;

    constructor(private $actionButton: ActionButtonService,
                public $http: ng.IHttpService,
                private $log: ng.ILogService,
                private toastService: ToastService) {

        // First Action Button
        this.$actionButton.addButton(this.button1);
        this.$actionButton.addAction(this.button1, {
            title: 'ACTIONTEST.ACTION1_TEXT',
            action: this.testAction1.bind(this),
            callback: (): void => {
                this.$log.info('Action 1 finished');
                this.toastService.show('Action 1 finished');
            }
        });

        this.$actionButton.addAction(this.button1, {
            title: 'ACTIONTEST.ACTION2_TEXT',
            action: this.testAction2.bind(this),
            callback: (): void => {
                this.$log.info('Action 2 finished');
                this.toastService.show('Action 2 finished');
            }
        });


        // Second Action Button
        this.$actionButton.addButton(this.button2);
        this.$actionButton.addAction(this.button2, {
            title: 'ACTIONTEST.ACTION3_TEXT',
            action: this.testAction3.bind(this),
            callback: (): void => {
                this.$log.info('Action 3 finished');
                this.toastService.show('Action 3 finished');
            },
            errorCallback: (): void => {
                this.$log.info('Error in Action 3!');
            }
        });
        this.$actionButton.addAction(this.button2, {
            title: 'ACTIONTEST.ACTION4_TEXT',
            action: this.testAction4.bind(this),
            callback: (): void => {
                this.$log.info('Action 4 finished');
                toastService.show('Action 4 finished');
            }
        });
        this.$actionButton.addAction(this.button2, {
            title: 'ACTIONTEST.ACTION5_TEXT',
            action: this.testAction5.bind(this),
            callback: (): void => {
                this.$log.info('Action 5 finished');
                this.toastService.show('Action 5 finished');
            }
        });
        this.testActions1 = this.$actionButton.getActions(this.button1);
        this.testActions2 = this.$actionButton.getActions(this.button2);
    }


    // Test 1 Function that returns promise (fast no delay)
    testAction1(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/action_req_1',
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });
    };

    // Test 2 Slow
    testAction2(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/action_req_2',
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });
    };

    // Test 3. 5 sec delay and error
    testAction3(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/action_req_3',
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });
    };

    // Test 4. Slowest. More than final delay
    testAction4(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/action_req_4',
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });
    };

    // Test 5. Slowest. More than final delay
    testAction5(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/action_req_5',
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });
    };
}
