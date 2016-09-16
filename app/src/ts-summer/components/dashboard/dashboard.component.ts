import {Component} from 'wk-ng/decorators/component';
import {template} from './dashboard.tpl';
import {ProfilePageComponent} from './profile/profile.component';
import {ActionButtonTestComponent} from './actionButtonTest/actionButtonTest.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {UsersComponent} from './users/users.component';
import {ToastService} from '../../services/toast-service';
import {UserDataService} from '../../services/user-data-service';
import {forwardRef} from 'wk-ng/core';
import {Inject} from 'wk-ng/wk-ng';
import {App} from '../../app';
import {LoaderService} from '../../services/loader-service';
import {AuthService} from '../../services/auth-service';
import {ModalFactory} from 'wk-ui/components/modal/modalFactory';

@Component({
    selector: 'dashboard-page',
    template: template,
    directives: [ProfilePageComponent, ActionButtonTestComponent, FeedbackComponent, UsersComponent],
    providers: [ToastService, LoaderService, AuthService, ModalFactory]
})
export class DashboardPageComponent {
    activeLanguage: string;
    switchLang: Function;
    loggedIn: boolean;
    user: ILogin.IUserData;
    isAdmin: boolean;

    constructor(@Inject(forwardRef(() => App)) app: App,
                private $translate: ng.translate.ITranslateService,
                // private localStorageService: angular.local.storage.ILocalStorageService,
                private loaderService: LoaderService,
                private authService: AuthService,
                private $state: ng.ui.IStateService,
                private toastService: ToastService,
                private userDataService: UserDataService) {

        // If not Authorized - go to Login State
        if (!userDataService.isAuthorized()) {
            $state.go('login');
        }

        this.activeLanguage = app.activeLanguage;
        this.switchLang = app.switchLang;
        this.loaderService.addLoader();

        if (userDataService.getUserData()) {
            // set locals
            this.loggedIn = userDataService.isAuthorized();
            this.user = userDataService.getUserData();
            this.isAdmin = userDataService.isAdmin(userDataService.getUserRole());
        }
    }

    // Logout Function
    // =================================================================================================================
    logout(): void {
        this.loaderService.showLoader();

        this.authService.userLogout()
            .then((data: ILogin.IServerResponse) => {
                if (data.success) {
                    // Clearing Local User Data
                    this.userDataService.clearUserData();
                    // Clear Startup App Time
                    // startupAppTime.clearAppStartupTime();
                    this.$state.go('login');
                    this.loaderService.hideLoader();
                } else {
                    this.loaderService.hideLoader();
                    this.toastService.show(data.error);
                }
            });
    }
}
