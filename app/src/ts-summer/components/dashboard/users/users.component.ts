import {Component} from 'wk-ng/decorators/component';
import {template} from './users.tpl';
import {template as newUserModal}  from './tpl/newUser.tpl';
import {ChangeDetectorRef} from 'wk-ng/core/ng1adaptor/change_detection';
import {LoaderService} from '../../../services/loader-service';
import {UsersService} from './services/users-service';
import {ToastService} from '../../../services/toast-service';
import {ModalApi} from 'wk-ui/components/modal/modalModel';
import {ModalFactory} from 'wk-ui/components/modal/modalFactory';

@Component({
    selector: 'users-component',
    template: template,
    directives: [],
    providers: [UsersService]
})
export class UsersComponent {

    loader: boolean;
    showContent: boolean;
    users: Array<IUsers.IUserData>;

    modalCreateUser: ModalApi;

    constructor(private usersService: UsersService,
                private toastService: ToastService,
                private loaderService: LoaderService,
                private $filter: ng.IFilterService,
                private modalFactory: ModalFactory,
                private cd: ChangeDetectorRef) {

        this.loader = true;
        this.showContent = false;

        this.modalCreateUser = this.modalFactory.create({
            template: newUserModal
        });

        // todo change response typedef
        this.usersService.getAllUsers().then((data: IUsers.IServerResponse): void => {
            // httpLoggerService.logRequestTime(res);
            // $log.info('getAllUsers() [' + res.config.method + '] [' + res.config.url + ']
            // [Params: ' + res.config.params + '] took ' + time + ' seconds.');
            this.users = data.data;
            this.loader = false;
            this.showContent = true;

            cd.detectChanges();
        });
    }

    // Create New User
    createNewUser(): void {
        this.modalCreateUser.open();
    }

    // Edit User Information
    // editUser() {}

    // Delete User
    // deleteUser() {}
}
