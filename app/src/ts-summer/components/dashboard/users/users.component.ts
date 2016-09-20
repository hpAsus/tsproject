import {Component} from 'wk-ng/decorators/component';
import {template} from './users.tpl';

import {ChangeDetectorRef} from 'wk-ng/core/ng1adaptor/change_detection';
import {LoaderService} from '../../../services/loader-service';
import {UsersService} from './services/users-service';
import {ToastService} from '../../../services/toast-service';
import {ModalApi} from 'wk-ui/components/modal/modalModel';
import {ModalFactory} from 'wk-ui/components/modal/modalFactory';
import {UserDataService} from '../../../services/user-data-service';

import {NewUserController} from './create-user/new-user.ctrl';
import {UpdateUserController} from './update-user/update-user.ctrl';
import {DeleteUserController} from './delete-user/delete-user.ctrl';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {NewUserComponent} from './create-user/new-user.component';


@Component({
    selector: 'users-component',
    template: template,
    directives: [NewUserComponent, UpdateUserComponent, DeleteUserComponent],
    providers: [UsersService, UserDataService]
})
export class UsersComponent {

    loader: boolean;
    showContent: boolean;
    users: IUsers.IUsersList;
    test: string;

    modalCreateUser: ModalApi;
    modalUpdateUser: ModalApi;
    modalConfirmDelete: ModalApi;

    constructor(private usersService: UsersService,
                private toastService: ToastService,
                private loaderService: LoaderService,
                private $filter: ng.IFilterService,
                private userDataService: UserDataService,
                private modalFactory: ModalFactory,
                private cd: ChangeDetectorRef) {



        this.getUsersList();
    }

    // Get All users
    getUsersList():void {
        this.loader = true;
        this.showContent = false;
        this.usersService.getAllUsers().then((data: IUsers.IServerResponse): void => {
            // httpLoggerService.logRequestTime(res);
            // $log.info('getAllUsers() [' + res.config.method + '] [' + res.config.url + ']
            // [Params: ' + res.config.params + '] took ' + time + ' seconds.');
            this.users = data.users;
            this.loader = false;
            this.showContent = true;

            this.cd.detectChanges();
        });
    }

    // Create New User
    createNewUser(): void {

        let modal: ModalApi = this.modalFactory.create({
            template: '<new-user-modal close-modal="vm.closeModal()" tabindex="-1" ' +
            'role="dialog" class="wk-modal wk-modal-with-overlay wk-modal-vertical-middle"></new-user-modal>',
            controller: NewUserController,
            controllerAs: 'vm',
        });
        modal.open({
            closeModal: (): void => {
                modal.close();
                this.getUsersList();
            }
        });
    }

    // Update User Information
    updateUser(login: string): void {
        let modal: ModalApi = this.modalFactory.create({
            template: '<update-user-modal></update-user-modal>',
            controller: UpdateUserController,
            controllerAs: 'vm',
        });
        modal.open({
            login: login,
            closeModal: (): void => {
                modal.close();
                this.getUsersList();
            }
        });
    }

    // Delete User
    deleteUser(login: string): void {
        let modal: ModalApi = this.modalFactory.create({
            template: '<delete-user-modal close-modal="vm.closeModal()" tabindex="-1"' +
            'role="dialog" class="wk-modal wk-modal-with-overlay wk-modal-vertical-middle"></delete-user-modal>',
            controller: DeleteUserController,
            controllerAs: 'vm',
        });
        modal.open({
            login: login,
            closeModal: (): void => {
                modal.close();
                this.getUsersList();
            }
        });
    }
}
