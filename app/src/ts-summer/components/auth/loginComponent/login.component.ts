import {Component} from 'wk-ng/decorators/component';
import {template} from './login.tpl';
import {AuthService} from '../../../services/auth-service';
import {LoaderService} from '../../../services/loader-service';
import {ToastService} from '../../../services/toast-service';
import {TsEmailValidatorDirective} from '../../../validators/tsEmailValidator';

@Component({
    selector: 'login-component',
    template: template,
    directives: [TsEmailValidatorDirective]
})
export class LoginComponent {
    email: string;
    password: string;

    constructor(private authService: AuthService, private loaderService: LoaderService, private toastService: ToastService,
    private $state: ng.ui.IStateService) {

        this.loaderService.addLoader();
    }

    submitForm(): void {
        let cred: ILogin.ICredentials = {
            email: this.email,
            password: this.password
        };

        this.loaderService.showLoader();

        this.authService.userLogin(cred)
            .then(() => {
                this.$state.go('viewProfile');
                this.loaderService.hideLoader();
            })
            .catch((errorObj: ILogin.IError) => {
                this.loaderService.hideLoader();
                this.toastService.show(errorObj.error);
            });
    }
}
