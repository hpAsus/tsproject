export const template: string = `
<div class="authCompontent">
    <div class="wk-login-screen">
        <div class="wk-layout-centered-medium">
              <header role="banner" class="wk-header">
                <div class="wk-header-container">
                    <div class="text-center">
                        <a ng-click="vm.switchLang('en')"><span>English</span></a> | 
                        <a ng-click="vm.switchLang('ru')"><span>Русский</span></a>
                    </div>
                    
                    <h1 class="text-center">{{ 'GENERAL.PROJECT_TITLE' | translate }} 
                    <em>{{ 'GENERAL.PROJECT_SLOGAN' | translate }}</em></h1>
                </div>
              </header>
              <div class="wk-login-layout">
                <ui-view></ui-view>
                <footer class="wk-login-footer">
                  <p class="wk-copyright-text text-center">&copy; 2016 {{ 'GENERAL.PROJECT_TITLE' | translate }} 
                  <em>{{ 'GENERAL.PROJECT_SLOGAN' | translate }}</em>. All rights reserved.</p>
                </footer>
              </div>
        </div>
    </div>
</div>
`;
