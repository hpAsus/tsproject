export const template: string = `
<div class="profileCompontent">
    
    <div class="wk-nav-tab-bar">
        <div class="wk-tab-bar-container">
            <div class="wk-tab-bar-gradient">
                <div class="wk-tab-bar-gradient-before"></div>
                <ul role="tablist" class="wk-nav wk-nav-tabs">
                    <li role="tab" ui-sref-active="wk-active">
                        <a tabIndex="0" ui-sref="viewProfile">{{ 'PROFILE.VIEWTAB' | translate}}</a>
                    </li>
                    <li role="tab" ui-sref-active="wk-active">
                        <a tabIndex="0" ui-sref="editProfile">{{ 'PROFILE.EDITTAB' | translate}}</a>
                    </li>
                </ul>
                <div class="wk-tab-bar-gradient-after"></div>
            </div>
        </div>
    </div>

    <ui-view></ui-view>
    
</div>
`;
