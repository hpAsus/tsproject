// import {ProfileService} from './profile/services/profile-service';
// import {UserDataService} from '../../services/user-data-service';
import vars from 'wk-vars/wk-vars';
// import {Inject} from 'wk-ng/wk-ng';
// import {forwardRef} from 'wk-ng/core';

export function dashboardRouting($stateProvider: ng.ui.IStateProvider): void {
    $stateProvider.state('dashboardComponent', {
        abstract: true,
        url: '/dashboard',
        resolve: {
            // userSession: (@Inject(forwardRef(() => ProfileService)) profileService: ProfileService,
            //               @Inject(forwardRef(() => UserDataService)) userDataService: UserDataService): Promise<void> => {
            //     return profileService.checkUserSession()
            //         .then((data: ILogin.IServerResponse) => {
            //             userDataService.setUserData(data.user);
            //             userDataService.authorizeUser();
            //             return data.user;
            //         })
            //         .catch(() => {
            //             return null;
            //         });
            // }
            // test: (): string => {
            //     debugger;
            //     console.log('Simple test1');
            //     return 'test1';
            // },
            // test2: (): string => {
            //     debugger;
            //     console.log('Simple test2');
            //     return 'test2';
            // }
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
