export function authRouting($stateProvider: ng.ui.IStateProvider): void {
    $stateProvider.state('authComponent', {
        abstract: true,
        template: '<login-page></login-page>'
    });
    $stateProvider.state('login', {
        url: '/login',
        parent: 'authComponent',
        template: '<login-component></login-component>'
    });
    $stateProvider.state('forgot', {
        url: '/forgot',
        parent: 'authComponent',
        template: '<forgot-component></forgot-component>'
    });
}
