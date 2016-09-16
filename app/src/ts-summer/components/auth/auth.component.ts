import {Component} from 'wk-ng/decorators/component';
import {template} from './auth.tpl';
import {LoginComponent} from './loginComponent/login.component';
import {ForgotComponent} from './forgotComponent/forgot.component';
import {AuthService} from '../../services/auth-service';
import {LoaderService} from '../../services/loader-service';
import {ToastService} from '../../services/toast-service';
import {Inject} from 'wk-ng/wk-ng';
import {forwardRef} from 'wk-ng/core';
import {App} from '../../app';

@Component({
    selector: 'login-page',
    template: template,
    directives: [ForgotComponent, LoginComponent],
    providers: [AuthService, LoaderService, ToastService]
})
export class AuthPageComponent {
    activeLanguage: string;
    switchLang: Function;

    constructor(@Inject(forwardRef(() => App)) app: App,
                private $translate: ng.translate.ITranslateService,
                private localStorageService: angular.local.storage.ILocalStorageService) {
        this.activeLanguage = app.activeLanguage;
        this.switchLang = app.switchLang;
    }
}
