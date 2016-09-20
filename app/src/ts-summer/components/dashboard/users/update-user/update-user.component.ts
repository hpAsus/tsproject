import vars from 'wk-vars/wk-vars';
import {template}  from './update-user.tpl';
import {UsersService} from '../services/users-service';
import {UserDataService} from '../../../../services/user-data-service';
import {Component} from 'wk-ng/decorators/component';
import {ChangeDetectorRef} from 'wk-ng/core/ng1adaptor/change_detection';
import {Output} from "wk-ng/decorators/output";
import {Input} from "wk-ng/decorators/input";

@Component({
    selector: 'update-user-modal',
    template: template,
    providers: [UsersService, UserDataService]
})

export class UpdateUserComponent {
    @Input() login: string;
    @Output() closeModal: Function;

    nameMaxWords: number = vars('MAX_WORDS_IN_NAME');
    minAge: number = vars('AGE_MINIMUM');
    maxAge: number = vars('AGE_MAXIMUM');
    bioMaxLength: number = vars('MAX_BIO_LENGTH');
    loader: boolean = true;
    showContent: boolean = false;
    isAdmin: boolean;
    adminRole: string = vars('ROLE_ADMIN');
    user: IUsers.IUserData;

    constructor(userDataService: UserDataService,
                usersService: UsersService,
                cd: ChangeDetectorRef) {
        this.isAdmin = userDataService.isAdmin(userDataService.getUserRole());

        usersService.getUser(this.login).then((data: IUsers.IServerResponse) => {
            console.log(data);
            this.user = data.user;
            this.loader = false;
            this.showContent = true;
            cd.detectChanges();

        }).catch((err: IUsers.IError) => {
            console.log(err);
        });
    }
}
