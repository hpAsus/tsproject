import {template as MainTemplate} from './components/main/main.tpl';
import {MainCtrl} from './components/main/main.ctrl';

export function appRouting($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider):void {
    $stateProvider
    //Auth States
    // =========================================================================================================
        .state('auth', {
            abstract: true,
            templateUrl: 'app/pages/auth/tpl/auth.tpl.html'
        })
        .state('login', {
            url: '/',
            parent: 'auth',
            templateUrl: 'app/pages/auth/login/tpl/login.tpl.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })
        .state('logout', {
            url: '/logout',
            parent: 'auth',
            controller: 'logoutCtrl'
        })

        .state('forgot', {
            url: '/reset',
            parent: 'auth',
            templateUrl: 'app/pages/auth/forgot/tpl/forgot.tpl.html',
            controller: 'forgotCtrl',
            controllerAs: 'vm'
        })

        // Dashboard
        // =========================================================================================================
        .state('main', {
            url: '/main',
            template: MainTemplate,
            controller: MainCtrl,
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise(($injector:ng.auto.IInjectorService) => {
        let $state:ng.ui.IStateService = <ng.ui.IStateService>$injector.get('$state');
        $state.go('main');
    });
}
