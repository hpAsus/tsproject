export const template: string = `
    <header role="banner" class="wk-header">
      <div class="wk-header-container">
        <h3><a ui-sref="viewProfile" class="wk-logo"><span class="wk-icon-layer"></span> Kolters Vulwer</a></h3>
        <ul class="wk-more-menu wk-green-icons">
          <li role="presentation"><a href="javascript:void(0)"><span class="wk-icon-more"></span>More</a></li>
        </ul>
        <ul class="wk-nav wk-green-icons">
           
          <li role="presentation">
            <a ng-click="vm.switchLang('en')"><span>{{ 'LANGS.EN' | translate }}</span></a> | 
            <a ng-click="vm.switchLang('ru')"><span>{{ 'LANGS.RU' | translate }}</span></a>
          </li>
          <li role="presentation">
            <a ui-sref="viewProfile"><span class="wk-icon-user"></span>{{ 'DASHBOARD.ACCOUNT' | translate }}</a>
          </li>
          <li role="presentation">
            <a ng-click="vm.logout()"><span class="wk-icon-logout"></span>{{ 'DASHBOARD.LOGOUT' | translate }}</a>
          </li>
        </ul>
      </div>
    </header>
    
    <nav role="navigation" class="wk-navbar">
        <div class="wk-navbar-container">
            <ul class="wk-more-menu">
                <li role="presentation"><a href="javascript:void(0)"><span class="wk-icon-menu"></span>Menu</a></li>
            </ul>
            <ul class="wk-nav">
                <li role="presentation"><a ui-sref="actionTest">{{ 'DASHBOARD.MENU_ACTION_BUTTON' | translate }}</a></li>
                <li role="presentation"><a ui-sref="users">{{ 'DASHBOARD.MENU_MANAGE_USERS' | translate }}</a></li>
                <li role="presentation"><a ui-sref="feedback">{{ 'DASHBOARD.MENU_FEEDBACK' | translate }}</a></li>
            </ul>
            <div class="wk-product-name"><em>{{ 'GENERAL.PROJECT_SLOGAN' | translate }}</em></div>
        </div>
    </nav>
<div class="dashboard-page-callout">    
    <div class="wk-page-content">
        <div class="wk-layout">
            <ui-view></ui-view>
        </div>
    </div>
</div>
`;
