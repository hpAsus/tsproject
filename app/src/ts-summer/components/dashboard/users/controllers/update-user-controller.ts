import vars from 'wk-vars/wk-vars';
import {UsersService} from '../services/users-service';
import {UserDataService} from '../../../../services/user-data-service';
import {Component} from 'wk-ng/decorators/component';
import {ChangeDetectorRef} from 'wk-ng/core/ng1adaptor/change_detection';

@Component({
    selector: 'update-user-info',
    providers: [UsersService, UserDataService]
})

export class UpdateUserController {
    nameMaxWords: number = vars('MAX_WORDS_IN_NAME');
    minAge: number = vars('AGE_MINIMUM');
    maxAge: number = vars('AGE_MAXIMUM');
    bioMaxLength: number = vars('MAX_BIO_LENGTH');
    loader: boolean = true;
    showContent: boolean = false;
    isAdmin: boolean;
    adminRole: string = vars('ROLE_ADMIN');
    user: IUsers.IUserData;

    constructor(private closeModal: Function,
                login: string,
                userDataService: UserDataService,
                usersService: UsersService,
                cd: ChangeDetectorRef
    ) {
        this.isAdmin = userDataService.isAdmin(userDataService.getUserRole());

        usersService.getUser(login).then((data: IUsers.IServerResponse) => {
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
