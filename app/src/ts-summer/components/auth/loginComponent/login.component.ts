import {Component} from 'wk-ng/decorators/component';
import {template} from './login.tpl';
import {AuthService} from '../../../services/auth-service';
import {LoaderService} from '../../../services/loader-service';
import {ToastService} from '../../../services/toast-service';
import {TsEmailValidatorDirective} from '../../../validators/tsEmailValidator';
import {UserDataService} from '../../../services/user-data-service';

@Component({
    selector: 'login-component',
    template: template,
    directives: [TsEmailValidatorDirective]
})
export class LoginComponent {
    email: string;
    password: string;

    constructor(private authService: AuthService,
                private loaderService: LoaderService,
                private toastService: ToastService,
                private $state: ng.ui.IStateService,
                private userDataService: UserDataService) {
        this.loaderService.addLoader();
    }

    // Login submit
    // =================================================================================================================
    submitForm(): void {
        let cred: ILogin.ICredentials = {
            email: this.email,
            password: this.password
        };

        this.loaderService.showLoader();

        this.authService.userLogin(cred)
            .then((data: ILogin.IServerResponse) => {
                if (data.success) {
                    this.userDataService.setUserData(data.user);
                    this.userDataService.authorizeUser();
                    this.loaderService.hideLoader();
                    this.$state.go('viewProfile');
                } else {
                    this.loaderService.hideLoader();
                    this.toastService.show(data.error);
                }
            })
            .catch((errorObj: ILogin.IError) => {
                this.loaderService.hideLoader();
                this.toastService.show(errorObj.error);
            });
    }
}
