import {Injectable} from 'wk-ng/decorators/injectable';
import vars from 'wk-vars/wk-vars';

@Injectable()
export class UserDataService {
    private _user: ILogin.IUserData = null;
    private _authorized: boolean = false;
    private _language: string = <string>this.localStorageService.get('language') || this.$translate.preferredLanguage();

    constructor(private $translate: ng.translate.ITranslateService,
                private localStorageService: angular.local.storage.ILocalStorageService) {
    }

    // Setting User Data Object
    setUserData(userObj: ILogin.IUserData): void {
        this._user = userObj;
    };

    // Get User Data
    getUserData(): ILogin.IUserData {
        return this._user;
    };

    // Clear User Data
    clearUserData(): void {
        this._user = null;
        this._authorized = false;
    };

    // Authorize User
    authorizeUser(): void {
        this._authorized = true;
    };

    // Check if authorized
    isAuthorized(): boolean {
        return this._authorized;
    };

    // Get User Role
    getUserRole(): string {
        return (this._user) ? this._user.role : null;
    };

    // If Is Admin
    isAdmin(userRole: string): boolean {
        return userRole === vars('ROLE_ADMIN');
    };

    // Set Language
    setUserLanguage(lang: string): void {
        this._language = lang;
    };

    // Get User Language
    getUserLanguage(): string {
        return this._language;
    }

}
