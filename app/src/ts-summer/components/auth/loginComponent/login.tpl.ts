export const template: string = `

<form class="wk-login-form" ng-submit="vm.submitLoginForm()" novalidate>
    <div class="wk-login-form-container">
        <div class="wk-login-fields">
            <div class="wk-field-item">
                <div class="wk-field-header">
                    <label>Username</label>
                </div>
                <div class="wk-field-body">
                    <input type="text" ng-model="vm.user.email" placeholder="your.email@mail.com"/>
                </div>
            </div>
            <div class="wk-field-item">
                <div class="wk-field-header">
                    <label>Password</label>
                </div>
                <div class="wk-field-body">
                    <input type="password" ng-model="vm.user.password" placeholder="Enter your password"/>
                </div>
            </div>
        </div>
    </div>
    <a ui-sref="forgot" class="forgot-link">Forgot username or password?</a>
    <button type="submit" class="wk-button-primary wk-button-full"><span>Sign in</span></button>
</form>    
`;
