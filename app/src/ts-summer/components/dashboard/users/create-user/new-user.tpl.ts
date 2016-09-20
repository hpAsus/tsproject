export const template: string = `
      <section class="wk-modal-content">
        <header class="wk-modal-header">
          <h4 class="wk-modal-title">{{ 'USERS.NEW.TITLE' | translate}}</h4>
          <button aria-label="close dialog" class="wk-button-icon wk-modal-close" ng-click="vm.closeModal()">
          <span class="wk-icon-close-square"></span>
          </button>
        </header>
        <div class="wk-modal-body">
           <form name="createUserForm" class="createUserForm" method="post" ng-submit="vm.submitForm()" novalidate>
           
           <div class="wk-field-item" ng-class="{ 'wk-field-has-error': createUserForm.$invalid && createUserForm.$dirty}">
              <div class="wk-field-header"><label class="required" translate="USERS.NEW.LABEL_EMAIL"></label></div>
              <div class="wk-field-body">
                <input type="text" name="email" ng-model="vm.user.email" placeholder="E-mail" required ts-email-validator />
              </div>
              <div class="wk-field-error" ng-show="createUserForm.email.$error.tsEmail">Incorrect E-mail</div>
              <div class="wk-field-error" ng-show="createUserForm.email.$error.required">Required E-mail</div>
            </div>
            
            <div class="wk-field-item" ng-class="{ 'wk-field-has-error': createUserForm.$invalid && createUserForm.$dirty}">
              <div class="wk-field-header"><label class="required" translate="USERS.NEW.LABEL_PASSWORD"></label></div>
              <div class="wk-field-body">
                <input type="password" name="password" ng-model="vm.user.password" placeholder="Password" required/>
              </div>
              <div class="wk-field-error" ng-show="createUserForm.password.$error.required">Required Password</div>
            </div>
           
            </form>
        </div>
        <footer class="wk-modal-footer">
          <div class="wk-button-bar">
            <div class="wk-button-group-right">
              <button ng-click="vm.closeModal()" class="wk-button-secondary">{{ 'USERS.NEW.BUTTON_CANCEL' | translate}}</button>
              <button>{{ 'USERS.NEW.BUTTON_CREATE' | translate}}</button>
            </div>
          </div>
        </footer>
      </section>
`;
