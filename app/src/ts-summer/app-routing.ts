export function appRouting($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void {

    $urlRouterProvider.otherwise(($injector: ng.auto.IInjectorService) => {
        let $state: ng.ui.IStateService = <ng.ui.IStateService>$injector.get('$state');
        $state.go('login');
    });
}
