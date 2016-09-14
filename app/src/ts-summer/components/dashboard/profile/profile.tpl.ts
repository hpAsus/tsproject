export const template: string = `
<div class="profileCompontent">
    
    <div class="wk-nav-tab-bar">
        <div class="wk-tab-bar-container">
            <div class="wk-tab-bar-gradient">
                <div class="wk-tab-bar-gradient-before"></div>
                <ul role="tablist" class="wk-nav wk-nav-tabs">
                    <li role="tab" aria-selected="true" class="wk-active"><a tabIndex="0" ui-sref="viewProfile">View Profile</a></li>
                    <li role="tab"><a tabIndex="0" ui-sref="editProfile">Edit Profile</a></li>
                </ul>
                <div class="wk-tab-bar-gradient-after"></div>
            </div>
        </div>
    </div>

    <ui-view></ui-view>
    
</div>
`;
