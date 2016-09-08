import {Component} from 'wk-ng/decorators/component';
import {template} from './login.tpl';
import {AuthService} from '../../../services/auth-service';

@Component({
    selector: 'login-component',
    template: template
})
export class LoginComponent {
    login: string;
    password: string;

    constructor(private authService: AuthService) {}

    doLogin(): void {
        let cred: ILogin.ICredentials = {
            email: this.login,
            password: this.password
        };
        this.authService.doLogin(cred).then((result: string) => {
            console.log(result);
        });
    }
}
