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
import {DeleteConfirmController} from './controllers/delete-confirm-controller';
import {UserDataService} from '../../../services/user-data-service';

@Component({
    selector: 'users-component',
    template: template,
    directives: [],
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
            closeModal: (): void => this.modalCreateUser.close()
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
            closeModal: (): void => this.modalUpdateUser.close(),
            login: login,
            userDataService: this.userDataService,
            usersService: this.usersService,
            cd: this.cd
        });
    }

    // Delete User
    deleteUser(login: string): void {
        this.modalConfirmDelete = this.modalFactory.create({
            template: deleteConfirmModal,
            controller: DeleteConfirmController,
            controllerAs: 'vm',
        });
        this.modalConfirmDelete.open({
            closeModal: (): void => this.modalConfirmDelete.close(),
            locals: {
                user: login
            }
        });
    }
}
