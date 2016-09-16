export const template: string = `

<div class="ts-action-item" ng-class="vm.loadingActiveClass" ng-click="vm.actionStart();">
    <i class="icon icon-{{vm.currentStatus}}"></i> <div class="ts-action-item-text">{{vm.actionTitle}}</div>
</div>
  
`;
