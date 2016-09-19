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
            <md-progress-circular
                class="progress-circular"
                md-mode="indeterminate" 
                md-diameter="50"
                ng-show="vm.loader">
            </md-progress-circular>

            <div ng-show="vm.showContent">
                <form name="editUserForm" class="editUserForm" method="post" ng-submit="vm.submitForm()" novalidate>

                    <div class="wk-field-item" ng-if="vm.user.role !== vm.adminRole"
                         ng-class="{ 'wk-field-has-error': editUserForm.$invalid && editUserForm.$dirty}">
                        <div class="wk-field-header">
                            <label class="required" translate="USERS.EDIT.LABEL_LOGIN"></label>
                        </div>
                        <div class="wk-field-body">
                            <input type="text" id="login" name="login"
                                   ng-model="vm.user.email" required="required" ts-email-validator/>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.login.$error.tsEmail">
                            <span translate="USERS.EDIT.ERRORS.EMAIL_INVALID"></span>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.login.$error.required">
                            <span translate="USERS.EDIT.ERRORS.EMAIL_REQUIRED"></span>
                        </div>
                    </div>

                    <input type="hidden" name="email" ng-model="vm.user.email"
                           ng-if="vm.user.role == vm.adminRole">
                    <input type="hidden" name="role" ng-model="vm.user.role">

                    <div class="wk-field-item"
                         ng-class="{ 'wk-field-has-error': editUserForm.$invalid && editUserForm.$dirty}">
                        <div class="wk-field-header">
                            <label class="required" translate="USERS.EDIT.LABEL_NAME"></label>
                        </div>
                        <div class="wk-field-body">
                            <input type="text" id="name" name="name" ng-model="vm.user.name"
                                   required="required" at-name-validator>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.name.$error.tsName">
                            <span translate="PROFILE.ERRORS.NAME_VALIDATOR"></span></div>
                        <div class="wk-field-error" ng-show="editUserForm.name.$error.tsNameWords">
                            <span translate="PROFILE.ERRORS.NAME_WORDS_VALIDATOR"></span></div>
                        <div class="wk-field-error" ng-show="editUserForm.name.$error.tsNameMinLength">
                            <span translate="PROFILE.ERRORS.MIN_LENGTH_VALIDATOR"></span></div>
                        <div class="wk-field-error" ng-show="editUserForm.name.$error.required">
                            <span translate="PROFILE.ERRORS.NAME_REQUIRED"></span></div>
                    </div>

                    <div class="wk-field-item"
                         ng-class="{ 'wk-field-has-error': editUserForm.$invalid && editUserForm.$dirty}">
                        <div class="wk-field-header">
                            <label class="required" translate="USERS.EDIT.LABEL_BIRTHDATE"></label>
                        </div>
                        <div class="wk-field-body">
                            <input type="text" id="birthDate" required="required" name="birthdate" at-date-validator
                                   ng-model="vm.user.birthdate" date-format="DD-MM-YYYY">
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.birthdate.$error.required">
                            <span translate="PROFILE.ERRORS.DATE_REQUIRED"></span>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.birthdate.$error.tsDate">
                            <span translate="PROFILE.ERRORS.DATE_VALIDATOR"
                                  translate-values="{dateformat: 'DD-MM-YYYY'}"></span>
                        </div>
                    </div>


                    <div class="wk-field-item"
                         ng-class="{ 'wk-field-has-error': editUserForm.$invalid && editUserForm.$dirty}">
                        <div class="wk-field-header">
                            <label class="required" translate="USERS.EDIT.LABEL_AGE"></label>
                        </div>
                        <div class="wk-field-body">
                            <input type="text" id="age" required="required" name="age" ng-model="vm.user.age"
                                   at-age-validator>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.age.$error.required">
                            <span translate="PROFILE.ERRORS.AGE_REQUIRED"></span></div>
                        <div class="wk-field-error" ng-show="editUserForm.age.$error.tsAge">
                            <span translate="PROFILE.ERRORS.AGE_VALIDATOR"
                                  translate-values="{min:vm.minAge,max:vm.maxAge}"></span>
                        </div>
                    </div>

                    <div class="wk-field-item"
                         ng-class="{ 'wk-field-has-error': editUserForm.$invalid && editUserForm.$dirty}">
                        <div class="wk-field-header">
                            <label class="required" translate="USERS.EDIT.LABEL_BIO"></label>
                        </div>
                        <div class="wk-field-body">
                            <textarea required="required"
                            name="bio" id="bio" ng-model="vm.user.bio" at-bio-validator></textarea>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.bio.$error.tsBio">
                            <span translate="PROFILE.ERRORS.BIO_VALIDATOR"></span>
                        </div>
                        <div class="wk-field-error" ng-show="editUserForm.bio.$error.required">
                            <span translate="PROFILE.ERRORS.BIO_REQUIRED"></span>
                        </div>
                    </div>


                </form>
            </div>

        </div>
        <footer class="wk-modal-footer">
            <div class="wk-button-bar">
                <div class="wk-button-group-right">
                    <button ng-click="vm.closeModal()" class="wk-button-secondary">{{ 'USERS.EDIT.BUTTON_CANCEL' |
                        translate}}
                    </button>
                    <button>{{ 'USERS.EDIT.BUTTON_UPDATE' | translate}}</button>
                </div>
            </div>
        </footer>
    </section>
</div>

`;
