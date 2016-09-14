export const template: string = `

<form novalidate autocomplete="off" class="profile" name="profileForm" ng-submit="vm.submitProfileUpdateForm()">
    <h2>olga@mail.ru</h2>
    <hr>
    
    <div class="wk-field-item">
      <div class="wk-field-header"><label class="required">Display Name</label></div>
      <div class="wk-field-body"><input type="text" placeholder="Tell us what's your name" required /></div>
      <div class="wk-field-error"></div>
    </div>
    
    <div class="wk-field-item">
      <div class="wk-field-header"><label class="required">Display age</label></div>
      <div class="wk-field-body"><input type="text" placeholder="What age will be displayed on your profile" required /></div>
      <div class="wk-field-error"></div>
    </div>
    
    <div class="wk-field-item">
      <div class="wk-field-header"><label class="required">Birth Date</label></div>
      <div class="wk-field-body"><input type="text" placeholder="When you was born" required /></div>
      <div class="wk-field-error"></div>
    </div>
    
    <div class="wk-field-item">
      <div class="wk-field-header"><label>Biography</label></div>
      <textarea placeholder="Say some words about your self" class="wk-textarea-medium"></textarea>
      <div class="wk-field-error"></div>
    </div>
    
    <div class="wk-button-bar">
         <button><span class="wk-icon-save"></span> Save profile</button>
    </div>
</form>
`;
