export const template: string = `

<div class="wk-layout-50-50">
  <div class="wk-layout-item">
    
    <md-progress-circular class="progress-circular" md-mode="indeterminate" md-diameter="50" ng-show="vm.loader">
    </md-progress-circular>
 
    <div class="wk-card-group wk-card-group-2" ng-show="vm.showContent">
        <div tabIndex="0" class="wk-card">
            <p>Login (E-mail)</p>
            <h3>{{vm.user.email}}</h3>
               
            <hr>
            
            <p>Display Name</p>
            <h3>{{vm.user.name}}</h3>
            
            <hr>
            
            <p>Birth Date</p>
            <h3>{{vm.user.birthdate}}</h3>
            
            <hr>
            
            <p>Display age</p>
            <h3>{{vm.user.age}}</h3>
            
            <hr>
            
            <p>Biography</p>
            <h3>{{vm.user.bio}}</h3>
        </div>
       
    </div>

  </div>
  <div class="wk-layout-item"><span></span></div>
</div>

`;
