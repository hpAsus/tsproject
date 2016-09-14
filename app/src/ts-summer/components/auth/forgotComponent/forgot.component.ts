import {Component} from 'wk-ng/decorators/component';
import {template} from './forgot.tpl';
import {AuthService} from '../../../services/auth-service';
import {LoaderService} from '../../../services/loader-service';
import {ToastService} from '../../../services/toast-service';
import {TsEmailValidatorDirective} from '../../../validators/tsEmailValidator';

@Component({
    selector: 'forgot-component',
    template: template,
    directives: [TsEmailValidatorDirective]
})
export class ForgotComponent {
    email: string;

    constructor(private authService: AuthService, private loaderService: LoaderService, private toastService: ToastService) {
        this.loaderService.addLoader();
    }

    submitForm(): void {
        let login: string = this.email;
        this.loaderService.showLoader();

        this.authService.resetPassword(login)
            .then((userData: ILogin.IServerResponse) => {
                let password: string = userData.user.password;
                console.log('Sending reset password link for user', userData.user.email, '...');
                this.loaderService.hideLoader();
                this.toastService.show(password);
            })
            .catch((errorObj: ILogin.IError) => {
                console.log(errorObj.error);
                this.loaderService.hideLoader();
                this.toastService.show(errorObj.error);
            });
    }
}
