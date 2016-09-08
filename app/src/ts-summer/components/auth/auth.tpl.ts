export const template: string = `
<div class="authCompontent">
    <div class="wk-login-screen">
        <div class="wk-layout-centered-medium">
              <header role="banner" class="wk-header">
                <div class="wk-header-container">
                    <h1 class="text-center">Angular Project <em>TS Edition</em></h1>
                </div>
              </header>
              <div class="wk-login-layout">
                
                <ui-view></ui-view>
                
                <footer class="wk-login-footer">
                  <p class="wk-copyright-text text-center">&copy; 2016 Angular Project. All rights reserved. Version: 0.1.2</p>
                </footer>
              </div>
        </div>
    </div>
</div>
`;
