export const template: string = `
      <section class="wk-modal-content">
        <div class="wk-modal-body">
            {{ 'USERS.DELETE.MESSAGE' | translate}}
        </div>
        <footer class="wk-modal-footer">
          <div class="wk-button-bar">
            <div class="wk-button-group-right">
              <button ng-click="vm.closeModal()" class="wk-button-secondary">{{ 'USERS.DELETE.BUTTON_CANCEL' | translate}}</button>
              <button>{{ 'USERS.DELETE.BUTTON_OK' | translate}}</button>
            </div>
          </div>
        </footer>
      </section>
`;
