import {Injectable} from 'wk-ng/decorators/injectable';
@Injectable()
export class UsersService {

    constructor(private $http: ng.IHttpService) {
    }

    // Get Single User
    getUser(login: string): Promise<IUsers.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                method: 'GET',
                url: '/api/users/' + login,
                data: login
            })
                .then((data: ng.IHttpPromiseCallbackArg<IUsers.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: IUsers.IError) => {
                    reject(error);
                });
        });
    }

    // Get All Users
    getAllUsers(): Promise<IUsers.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                method: 'GET',
                url: '/api/userslist'
            })
                .then((data: ng.IHttpPromiseCallbackArg<IUsers.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: IUsers.IError) => {
                    reject(error);
                });
        });
    }

    // Create User
    createUser(data: IUsers.IUserData): Promise<IUsers.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                method: 'POST',
                url: 'api/createUser',
                data: data
            })
                .then((data: ng.IHttpPromiseCallbackArg<IUsers.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: IUsers.IError) => {
                    reject(error);
                });
        });
    }

    // Update User Information
    updateUser(user: IUsers.IUserData): Promise<IUsers.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                method: 'PUT',
                url: 'api/users/' + user.email,
                data: user
            })
                .then((data: ng.IHttpPromiseCallbackArg<IUsers.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: IUsers.IError) => {
                    reject(error);
                });
        });
    }

    // Delete User
    deleteUser(login: string): Promise<IUsers.IServerResponse> {
        return new Promise((resolve: Function, reject: Function) => {
            this.$http({
                method: 'DELETE',
                url: 'api/users/' + login,
                data: login
            })
                .then((data: ng.IHttpPromiseCallbackArg<IUsers.IServerResponse>): void => {
                    (data.data.success) ? resolve(data.data) : reject(data.data);
                })
                .catch((error: IUsers.IError) => {
                    reject(error);
                });
        });
    }

}
