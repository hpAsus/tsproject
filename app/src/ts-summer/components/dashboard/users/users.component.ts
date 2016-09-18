import {Component} from 'wk-ng/decorators/component';

import {template} from './users.tpl';
import {template as newUserModal}  from './tpl/newUser.tpl';
import {template as updateUserModal}  from './tpl/updateUser.tpl';
import {template as deleteConfirmModal}  from './tpl/deleteConfirm.tpl';

import {ChangeDetectorRef} from 'wk-ng/core/ng1adaptor/change_detection';
import {LoaderService} from '../../../services/loader-service';
import {UsersService} from './services/users-service';
import {ToastService} from '../../../services/toast-service';
import {ModalApi} from 'wk-ui/components/modal/modalModel';
import {ModalFactory} from 'wk-ui/components/modal/modalFactory';

import {NewUserController} from './controllers/new-user-controller';
import {UpdateUserController} from './controllers/update-user-controller';
import {deleteConfirmController} from './controllers/delete-confirm-controller';

@Component({
    selector: 'users-component',
    template: template,
    directives: [],
    providers: [UsersService]
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
                private modalFactory: ModalFactory,
                private cd: ChangeDetectorRef) {

        this.loader = true;
        this.showContent = false;

        this.test = 'Pimp my car, dude!';

        // todo change response typedef
        this.usersService.getAllUsers().then((data: IUsers.IServerResponse): void => {
            // httpLoggerService.logRequestTime(res);
            // $log.info('getAllUsers() [' + res.config.method + '] [' + res.config.url + ']
            // [Params: ' + res.config.params + '] took ' + time + ' seconds.');
            this.users = data.users;
            this.loader = false;
            this.showContent = true;

            cd.detectChanges();
        });
    }

    // Create New User
    createNewUser(): void {
        this.modalCreateUser = this.modalFactory.create({
            template: newUserModal,
            controller: NewUserController,
            controllerAs: 'vm',
        });
        this.modalCreateUser.open({
            locals: {
                modal: this.modalCreateUser,
            }
        });
    }

    // Update User Information
    updateUser(login: string): void {
        this.modalUpdateUser = this.modalFactory.create({
            template: updateUserModal,
            controller: UpdateUserController,
            controllerAs: 'vm',
        });
        this.modalUpdateUser.open({
            locals: {
                user: login,
                modal: this.modalUpdateUser,
            }
        });
    }

    // Delete User
    deleteUser(login: string): void {
        this.modalConfirmDelete = this.modalFactory.create({
            template: deleteConfirmModal,
            controller: deleteConfirmController,
            controllerAs: 'vm',
        });
        this.modalConfirmDelete.open({
            locals: {
                user: login,
                modal: this.modalConfirmDelete,
            }
        });
    }
}
