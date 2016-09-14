import {Component} from 'wk-ng/decorators/component';
import {template} from './auth.tpl';
import {LoginComponent} from './loginComponent/login.component';
import {ForgotComponent} from './forgotComponent/forgot.component';
import {AuthService} from '../../services/auth-service';
import {LoaderService} from '../../services/loader-service';
import {ToastService} from '../../services/toast-service';

@Component({
    selector: 'login-page',
    template: template,
    directives: [ForgotComponent, LoginComponent],
    providers: [AuthService, LoaderService, ToastService]
})
export class AuthPageComponent {
}
