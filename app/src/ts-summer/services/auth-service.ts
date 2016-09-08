import {Injectable} from 'wk-ng/decorators/injectable';

// const enum UserRoles = {
//     ROLE_USER:
// };

@Injectable()
export class AuthService {

    constructor(private $http: ng.IHttpService) {
    }

    // user login
    userLogin(userData: ILogin.ICredentials): Promise<any> {
        return this.$http({
            method: 'POST',
            url: '/login',
            data: userData
        });
    }


    // reset password
    resetPassword(login: string): Promise<any> {
        return this.$http({
            method: 'GET',
            url: '/forgot',
            params: {
                user: login
            }
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
        // let access: number = (accessRoles) ? accessRoles.findIndex((role: string) => (role === userRole)) : 0;
        let access: boolean = _.find(accessRoles, {role: userRole }) !== undefined;
        return access;
        // return access >= 0;
    }

    doLogin(creds: ILogin.ICredentials): Promise<string> {
        return new Promise((resolve: Function, reject: Function) => {
            // this.$http()
            resolve('success');
        });
    }
}
