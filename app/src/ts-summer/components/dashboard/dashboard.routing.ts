import {ProfileService} from './profile/services/profile-service';
import {UserDataService} from '../../services/user-data-service';
import vars from 'wk-vars/wk-vars';

export function dashboardRouting($stateProvider: ng.ui.IStateProvider): void {
    $stateProvider.state('dashboardComponent', {
        abstract: true,
        url: '/dashboard',
        resolve: {
            // userSession: (profileService: ProfileService, userDataService: UserDataService): void => {
            //     // profileService.checkUserSession()
            //     //     .then((data: ILogin.IServerResponse) => {
            //     //         console.log(data);
            //     //         if (data.success) {
            //     //             userDataService.setUserData(data.user);
            //     //             userDataService.authorizeUser();
            //     //         }
            //     //     });
            // }
            test: ():void => {
                // console.log('resolving dashboard state', lang);
            }
        },
        data: {
            secure: true,
            roles: [vars('ROLE_USER'), vars('ROLE_ADMIN')]
        },
        template: '<dashboard-page></dashboard-page>'
    });
    $stateProvider.state('profileComponent', {
        abstract: true,
        url: '/profile',
        parent: 'dashboardComponent',
        template: '<profile-component></profile-component>'
    });
    $stateProvider.state('viewProfile', {
        url: '/view',
        parent: 'profileComponent',
        template: '<view-profile-component></view-profile-component>'
    });
    $stateProvider.state('editProfile', {
        url: '/edit',
        parent: 'profileComponent',
        template: '<edit-profile-component></edit-profile-component>'
    });

    // =================================================================================================================
    // Action Test
    $stateProvider.state('actionTest', {
        url: '/action-test',
        parent: 'dashboardComponent',
        template: '<action-button-test-component></action-button-test-component>'
    });
    // =================================================================================================================
    // Users Managment
    $stateProvider.state('users', {
        url: '/users',
        parent: 'dashboardComponent',
        data: {
            secure: true,
            roles: [vars('ROLE_ADMIN')]
        },
        template: '<users-component></users-component>'
    });

    // =================================================================================================================
    // Feedback
    $stateProvider.state('feedback', {
        url: '/feedback',
        parent: 'dashboardComponent',
        template: '<feedback-component></feedback-component>'
    });
}
