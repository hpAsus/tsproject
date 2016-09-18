export const template: string = `
<div class="ts-action-button">
    <div class="ts-action-title" ng-click="vm.showActions()">{{vm.buttonTitle}}</div>
    <div class="ts-action-dropdown" ng-show="vm.showActionsMenu">
            <ts-action-item action-title="action.title" action="action.action()" 
            callback="action.callback()" error-callback="action.errorCallback()" 
            ng-repeat="action in vm.actions"></ts-action-item>
    </div>
</div>
`;
