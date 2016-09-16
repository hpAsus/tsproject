export const template: string = `

<form novalidate autocomplete="off" class="profile" name="profileForm" ng-submit="vm.submitProfileUpdateForm()">
    <h2>{{vm.user.email}}</h2>
    <hr>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required">Display Name</label></div>
      <div class="wk-field-body">
        <input type="text" name="name" ng-model="vm.user.name" placeholder="Tell us what's your name" required ts-name-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsName">Incorrect name</div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsNameWords">Incorrect name Words</div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.tsNameMinLength">Incorrect name minLength</div>
      <div class="wk-field-error" ng-show="profileForm.name.$error.required">
        Required Name
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required">Display age</label></div>
      <div class="wk-field-body">
        <input type="text" ng-model="vm.user.age" name="age" 
        placeholder="What age will be displayed on your profile" required ts-age-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.age.$error.required">
        Required Age
      </div>
      <div class="wk-field-error" ng-show="profileForm.age.$error.tsAge">
        Incorrect Age
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label class="required">Birth Date</label></div>
      <div class="wk-field-body">
        <input type="text" name="birthdate" ng-model="vm.user.birthdate" placeholder="When you was born"
         date-format="DD-MM-YYYY" required ts-date-validator />
      </div>
      <div class="wk-field-error" ng-show="profileForm.birthdate.$error.required">
        Required birthdate
      </div>
      <div class="wk-field-error" ng-show="profileForm.birthdate.$error.tsDate">
        Incorrect Birthdate
      </div>
    </div>
    
    <div class="wk-field-item" ng-class="{ 'wk-field-has-error': profileForm.$invalid && profileForm.$dirty}">
      <div class="wk-field-header"><label>Biography</label></div>
      <textarea placeholder="Say some words about your self" ng-model="vm.user.bio" class="wk-textarea-medium" ts-bio-validator></textarea>
      <div class="wk-field-error" ng-show="profileForm.birthdate.$error.tsBio">
        Incorrect bio
      </div>
    </div>
    
    <div class="wk-button-bar">
         <button ng-disabled="profileForm.$invalid"><span class="wk-icon-save"></span> Save profile</button>
    </div>
</form>
`;
