import {template as MainTemplate} from './components/main/main.tpl';
import {MainCtrl} from './components/main/main.ctrl';

export function appRouting($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    $stateProvider
        .state('main', {
            url: '/main',
            template: MainTemplate,
            controller: MainCtrl,
            controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise(($injector: ng.auto.IInjectorService) => {
        let $state: ng.ui.IStateService = <ng.ui.IStateService>$injector.get('$state');
        $state.go('main');
    });
}
