export const template: string = `
<div class="usersCompontent">
    
    <div class="t-table">
        <div class="t-row">

            <div class="t-cell cell-email">olga@mail.ru <span class="label label-admin">Admin</span></div>
            <div class="t-cell cell-name">Olga Moskva</div>
            <div class="t-cell cell-age">23</div>
            <div class="t-cell cell-actions">
                <div class="wk-button-bar text-right">
                    <button class="wk-button-icon"><span class="wk-icon-pencil"></span></button>
                    <button class="wk-button-icon wk-button-danger"><span class="wk-icon-close"></span></button>
                </div>
            </div>
        </div>
        <div ng-repeat="user in vm.users | orderBy:'email'" class="t-row">

            <div class="t-cell cell-email">{{user.email}} 
                <span ng-if="user.role=='admin'" class="label label-admin">{{ 'USERS.LIST.ADMIN_BADGE' | translate}}</span>
            </div>
            <div class="t-cell cell-name">{{user.name}}</div>
            <div class="t-cell cell-age">{{user.age}}</div>
            <div class="t-cell cell-actions">
                <div class="wk-button-bar users-actions">
                    <button class="wk-button-icon"><span class="wk-icon-pencil"></span></button>
                    <button class="wk-button-icon wk-button-danger"><span class="wk-icon-close"></span></button>
                </div>
            </div>
        </div>
    </div>

    
</div>
`;
