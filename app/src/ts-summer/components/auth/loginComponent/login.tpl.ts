export const template: string = `

<form class="wk-login-form" name="loginForm" ng-submit="vm.submitForm()" novalidate>
    <div class="wk-login-form-container">
        <div class="wk-login-fields">
            <div class="wk-field-item" ng-class="{ 'wk-field-has-error': loginForm.$invalid && loginForm.$dirty}">
                <div class="wk-field-header">
                    <label>{{ 'AUTH.LABELS.EMAIL' | translate }}</label>
                </div>
                <div class="wk-field-body">
                    <input type="text" name="email" required ng-model="vm.email" placeholder="your.email@mail.com" ts-email-validator/>
                </div>
                <div class="wk-field-error" ng-show="loginForm.email.$error.tsEmail">
                    {{ 'AUTH.ERRORS.EMAIL_INVALID' | translate }}
                </div>
                <div class="wk-field-error" ng-show="loginForm.email.$error.required">
                    {{ 'AUTH.ERRORS.EMAIL_REQUIRED' | translate }}
                </div>
            </div>
            <div class="wk-field-item" ng-class="{ 'wk-field-has-error': loginForm.$invalid && loginForm.$dirty}">
                <div class="wk-field-header">
                    <label>{{ 'AUTH.LABELS.PASSWORD' | translate }}</label>
                </div>
                <div class="wk-field-body">
                    <input type="password" name="password" required ng-model="vm.password" placeholder="Enter your password"/>
                </div>
                <div class="wk-field-error" ng-show="loginForm.password.$error.required">{{ 'AUTH.ERRORS.PASS_REQUIRED' | translate }}</div>
            </div>
        </div>
    </div>
    <a ui-sref="forgot" class="forgot-link">{{ 'AUTH.FORGOT' | translate }}</a>
    <button type="submit" class="wk-button-primary wk-button-full" ng-disabled="loginForm.$invalid">
    <span>{{ 'AUTH.SIGNIN' | translate }}</span>
    </button>
</form>    
`;
