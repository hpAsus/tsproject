export const template: string = `

<div class="ts-action-item" ng-class="vm.loadingAnimationClass" ng-click="vm.actionStart();">
    <i class="icon icon-{{vm.currentStatus}}"></i> <div class="ts-action-item-text" translate="{{vm.actionTitle}}"></div>
</div>
  
`;
