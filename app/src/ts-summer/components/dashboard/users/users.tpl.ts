export const template: string = `
<div class="usersCompontent">
    
    <div class="users-loader" ng-show="vm.loader">
        <md-progress-circular class="progress-circular" md-mode="indeterminate" md-diameter="50"></md-progress-circular>
    </div>
    
    <div ng-show="vm.showContent">
        <button class="create-user" ng-click="vm.createNewUser()">
        {{ 'USERS.LIST.NEW_USER' | translate}}
        </button>
        <div class="t-table">
            <div ng-repeat="user in vm.users | orderBy:'email'" class="t-row">
                <div class="t-cell cell-email">{{user.email}} 
                    <span ng-if="user.role=='admin'" class="label label-admin">{{ 'USERS.LIST.ADMIN_BADGE' | translate}}</span>
                </div>
                <div class="t-cell cell-name">{{user.name}}</div>
                <div class="t-cell cell-age">{{user.age}}</div>
                <div class="t-cell cell-actions">
                    <div class="wk-button-bar users-actions">
                        <button class="wk-button-icon" ng-click="vm.updateUser(user.email)">
                            <span class="wk-icon-pencil"></span>
                        </button>
                        <button class="wk-button-icon wk-button-danger" 
                            ng-if="user.role!=='admin'" 
                            ng-click="vm.deleteUser(user.email)">
                            <span class="wk-icon-close"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>
`;
