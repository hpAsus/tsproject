import {Injectable} from 'wk-ng/decorators/injectable';


@Injectable()
export class AuthService {

    constructor(private $http: ng.IHttpService) {
    }

    // user login
    userLogin(userData: ILogin.ICredentials): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'POST',
                    url: '/login',
                    data: userData
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });

        });

    }


    // reset password
    resetPassword(login: string): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/forgot',
                    params: {
                        user: login
                    }
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });
        });

    }

    // user logout
    userLogout(): Promise<string> {
        return this.$http({
            method: 'GET',
            url: '/logout'
        });
    }

    // check if user has access
    checkUserAccess(userRole: string, accessRoles: Array<string>): boolean {
        return _.find(accessRoles, {role: userRole}) !== undefined;
    }

    // doLogin(creds: ILogin.ICredentials): Promise<string> {
    //     return new Promise((resolve: Function, reject: Function) => {
    //         // this.$http()
    //         resolve('success');
    //     });
    // }
}
