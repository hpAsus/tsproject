export const template: string = `

<form class="wk-login-form">
    <h3>Forgot Username or Password</h3>
    <p>To receive your password, please enter the email address you have registered with. 
    We will email you a link to a page where you can create a new password. If you do not receive an email, 
    please check your spam mail folder or contact Customer Support.</p>
    <div class="wk-field-item">
        <div class="wk-field-header">
            <label>Email Address</label>
        </div>
        <div class="wk-field-body">
            <input type="email" ng-model="vm.login" />
        </div>
    </div>
    <div class="wk-button-bar">
        <div class="wk-button-group-right">
            <button type="button" ui-sref="login" class="wk-button-secondary">Back to Login</button>
        <button type="submit" class="wk-button-success">Reset password</button>
        </div>
    </div>
</form>
`;
