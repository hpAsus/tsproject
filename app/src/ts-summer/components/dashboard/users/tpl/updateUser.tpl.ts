export const template: string = `
    <div tabindex="-1" role="dialog" class="wk-modal wk-modal-large wk-modal-with-overlay wk-modal-vertical-middle">
      <section class="wk-modal-content">
        <header class="wk-modal-header">
          <h4 class="wk-modal-title">{{ 'USERS.EDIT.TITLE' | translate}}</h4>
          <button aria-label="close dialog" class="wk-button-icon wk-modal-close" ng-click="vm.closeModal()">
          <span class="wk-icon-close-square"></span>
          </button>
        </header>
        <div class="wk-modal-body">
            UPDATE USER FORM
        </div>
        <footer class="wk-modal-footer">
          <div class="wk-button-bar">
            <div class="wk-button-group-right">
              <button ng-click="vm.closeModal()" class="wk-button-secondary">{{ 'USERS.EDIT.BUTTON_CANCEL' | translate}}</button>
              <button>{{ 'USERS.EDIT.BUTTON_UPDATE' | translate}}</button>
            </div>
          </div>
        </footer>
      </section>
    </div>
`;
