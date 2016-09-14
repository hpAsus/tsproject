export const template: string = `

<form class="wk-login-form" name="forgotForm" ng-submit="vm.submitForm()">
    <h3>{{ 'AUTH.FORGOT_TITLE' | translate }}</h3>
    <p>{{ 'AUTH.FORGOT_DESC' | translate }}</p>
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': forgotForm.$invalid && forgotForm.$dirty}">
        <div class="wk-field-header">
            <label>{{ 'AUTH.LABELS.EMAIL' | translate }}</label>
        </div>
        <div class="wk-field-body">
            <input type="email" name="email" ng-model="vm.email" required ts-email-validator />
        </div>
        <div class="wk-field-error" ng-show="forgotForm.email.$error.tsEmail">
            {{ 'AUTH.ERRORS.EMAIL_INVALID' | translate }}
        </div>
        <div class="wk-field-error" ng-show="forgotForm.email.$error.required">
            {{ 'AUTH.ERRORS.EMAIL_REQUIRED' | translate }}
        </div>
    </div>
    <div class="wk-button-bar">
        <div class="wk-button-group-right">
            <button type="button" ui-sref="login" class="wk-button-secondary">{{ 'AUTH.BACK_TO_LOGIN' | translate }}</button>
            <button type="submit" class="wk-button-success" ng-disabled="forgotForm.$invalid">
            {{ 'AUTH.FORGOT_BUTTON' | translate }}</button>
        </div>
    </div>
</form>
`;
