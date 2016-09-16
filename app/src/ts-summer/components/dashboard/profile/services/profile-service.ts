import {Injectable} from 'wk-ng/decorators/injectable';

@Injectable()
export class ProfileService {

    constructor(private $http: ng.IHttpService) {
    }

    // get user profile data
    getUserProfile(userLogin: string): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/api/users/' + userLogin
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });

        });
    }

    // update user profile data
    updateUserProfile(userData: ILogin.IUserData): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'PUT',
                    url: 'api/users/' + userData.email,
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

    // update user profile data
    checkUserSession(): Promise<ILogin.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                    method: 'GET',
                    url: '/api/checksession'
                })
                .then((data: ng.IHttpPromiseCallbackArg<ILogin.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: ILogin.IError) => {
                    reject(error);
                });

        });
    }


}
