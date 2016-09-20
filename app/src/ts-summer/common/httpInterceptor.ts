export class AuthenticationInterceptor {
    private static _instance: AuthenticationInterceptor;
    public static Factory($q: ng.IQService, $window: ng.IWindowService): AuthenticationInterceptor {
        AuthenticationInterceptor._instance = new AuthenticationInterceptor($q, $window);
        return AuthenticationInterceptor._instance;
    }
    constructor(private $q: ng.IQService, private $window: ng.IWindowService) {
    }

    public responseError(rejection: Object) {
        console.log(rejection);
        let self: AuthenticationInterceptor = AuthenticationInterceptor._instance;

        if (rejection.status === 401) {
            console.log(rejection);
            self.$window.location = '/';
        }

        return self.$q.reject(rejection);
    }
}

export function httpInterceptor($httpProvider: ng.IHttpProvider): void {
    $httpProvider.interceptors.push(AuthenticationInterceptor.Factory);
}
