import {Component} from 'wk-ng/decorators/component';
import {AuthPageComponent} from './components/auth/auth.component';
import {DashboardPageComponent} from './components/dashboard/dashboard.component';
import {UserDataService} from './services/user-data-service';

@Component({
    selector: 'app',
    template: '<ui-view></ui-view>',
    directives: [AuthPageComponent, DashboardPageComponent],
    providers: []
})
export class App {
    _activeLanguage: string;

    constructor(private userDataService: UserDataService,
                private $translate: ng.translate.ITranslateService,
                private localStorageService: angular.local.storage.ILocalStorageService) {
        this._activeLanguage = userDataService.getUserLanguage();
    }

    public switchLang(key: string): void {
        this.$translate.use(key);
        this.localStorageService.set('language', key);
        this._activeLanguage = key;
    };

    get activeLanguage(): string {
        return this._activeLanguage;
    }

}
