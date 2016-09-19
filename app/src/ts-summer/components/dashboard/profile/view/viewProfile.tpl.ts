export const template: string = `

<div class="wk-layout-50-50">
  <div class="wk-layout-item">
    
    <md-progress-circular class="progress-circular" md-mode="indeterminate" md-diameter="50" ng-show="vm.loader">
    </md-progress-circular>
 
    <div class="wk-card-group wk-card-group-2" ng-show="vm.showContent">
        <div tabIndex="0" class="wk-card">
            <p translate="PROFILE.LABELS.LOGIN_LABEL"></p>
            <h3>{{vm.user.email}}</h3>
               
            <hr>
            
            <p translate="PROFILE.LABELS.NAME_LABEL"></p>
            <h3>{{vm.user.name}}</h3>
            
            <hr>
            
            <p translate="PROFILE.LABELS.BIRTHDATE_LABEL"></p>
            <h3>{{vm.user.birthdate}}</h3>
            
            <hr>
            
            <p translate="PROFILE.LABELS.AGE_LABEL"></p>
            <h3>{{vm.user.age}}</h3>
            
            <hr>
            
            <p translate="PROFILE.LABELS.BIO_LABEL"></p>
            <h3>{{vm.user.bio}}</h3>
        </div>
       
    </div>

  </div>
  <div class="wk-layout-item"><span></span></div>
</div>

`;
