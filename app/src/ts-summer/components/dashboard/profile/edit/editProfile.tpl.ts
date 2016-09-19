export const template: string = `

<form novalidate autocomplete="off" class="profile" name="profileForm" ng-submit="vm.submitProfileUpdateForm()">
    <p translate="PROFILE.LABELS.LOGIN_LABEL"></p>
    <h2>{{vm.user.email}}</h2>
    <hr>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required" translate="PROFILE.LABELS.NAME_LABEL"></label></div>
      <div class="wk-field-body">
        <input type="text" name="name" ng-model="vm.user.name" 
        placeholder="Tell us what's your name" required ts-name-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsName">
        <span translate="PROFILE.ERRORS.NAME_VALIDATOR"></span>
      </div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsNameWords">
        <span translate="PROFILE.ERRORS.NAME_WORDS_VALIDATOR"></span>
      </div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsNameMinLength">
        <span translate="PROFILE.ERRORS.MIN_LENGTH_VALIDATOR"></span>
        </div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.required">
        <span translate="PROFILE.ERRORS.NAME_REQUIRED"></span>
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required" translate="PROFILE.LABELS.AGE_LABEL"></label></div>
      <div class="wk-field-body">
        <input type="text" ng-model="vm.user.age" name="age" 
        placeholder="What age will be displayed on your profile" required ts-age-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.age.$error.required">
        <span translate="PROFILE.ERRORS.AGE_REQUIRED"></span>
      </div>
      <div class="wk-field-error" ng-show="profileForm.age.$error.tsAge">
        <span translate="PROFILE.ERRORS.AGE_VALIDATOR" translate-values="{min:vm.minAge,max:vm.maxAge}"></span>
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required" translate="PROFILE.LABELS.BIRTHDATE_LABEL"></label></div>
      <div class="wk-field-body">
        <input type="text" name="birthdate" ng-model="vm.user.birthdate" placeholder="When you was born"
         date-format="DD-MM-YYYY" required ts-date-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.birthdate.$error.required">
        <span translate="PROFILE.ERRORS.DATE_REQUIRED"></span>
      </div>
      <div class="wk-field-error" ng-show="profileForm.birthdate.$error.tsDate">
        <span translate="PROFILE.ERRORS.DATE_VALIDATOR" translate-values="{dateformat: 'DD-MM-YYYY'}"></span>
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label>Biography</label></div>
      <textarea required ng-model="vm.user.bio" name="bio" class="wk-textarea-medium" ts-bio-validator></textarea>
      <div class="wk-field-error" ng-show="profileForm.bio.$error.tsBio">
        <span translate="PROFILE.ERRORS.BIO_VALIDATOR"></span>
      </div>
      <div class="wk-field-error" ng-show="profileForm.bio.$error.required">
        <span translate="PROFILE.ERRORS.BIO_REQUIRED"></span>
      </div>
    </div>
    
    <div class="wk-button-bar">
         <button ng-disabled="profileForm.$invalid"><span class="wk-icon-save"></span> 
         {{'PROFILE.EDIT.SAVE_PROFILE_BUTTON' | translate}}</button>
    </div>
</form>
`;
