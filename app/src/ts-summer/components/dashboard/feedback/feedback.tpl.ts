export const template: string = `
<div class="form-control-feedback">
    <div class="wk-layout-50-50">
        <div class="wk-layout-item">
            <form novalidate autocomplete="off" class="feedback" name="vm.form" ng-submit="vm.submitForm()">
            
                <div class="wk-field-item">
                  <div class="wk-field-header"><label class="required">Name</label></div>
                  <div class="wk-field-body"><input type="text" placeholder="What age will be displayed on your profile" required /></div>
                  <div class="wk-field-error"></div>
                </div>
                
                <div class="wk-field-item">
                  <div class="wk-field-header"><label class="required">E-mail</label></div>
                  <div class="wk-field-body"><input type="text" placeholder="When you was born" required /></div>
                  <div class="wk-field-error"></div>
                </div>
                
                <div class="wk-field-item">
                  <div class="wk-field-header"><label>Message</label></div>
                  <textarea placeholder="Say some words about your self" class="wk-textarea-medium"></textarea>
                  <div class="wk-field-error"></div>
                </div>
                
                <div class="wk-button-bar">
                     <button><span class="wk-icon-send"></span> Send message</button>
                </div>
            
            </form>
        </div>
    </div>
    
</div>
`;
