import {Component} from 'wk-ng/decorators/component';
import {template} from './viewProfile.tpl';
import {UserDataService} from '../../../../services/user-data-service';
import {ProfileService} from '../services/profile-service';
import {ToastService} from '../../../../services/toast-service';
import {ChangeDetectorRef} from 'wk-ng/core';
import {LoaderService} from '../../../../services/loader-service';


@Component({
    selector: 'view-profile-component',
    template: template,
    directives: [],
    providers: []
})
export class ViewProfilePageComponent {
    loader: boolean;
    showContent: boolean;
    currentUser: ILogin.IUserData;
    user: ILogin.IUserData;

    constructor(private userDataService: UserDataService,
                private profileService: ProfileService,
                private toastService: ToastService,
                private loaderService: LoaderService,
                private cd: ChangeDetectorRef) {

        this.loader = true;
        this.showContent = false;
        this.currentUser = userDataService.getUserData();

        profileService.getUserProfile(this.currentUser.email)
            .then((data: ILogin.IServerResponse) => {
                if (data.success) {
                    this.user = data.user;
                    this.loader = false;
                    this.showContent = true;
                    cd.detectChanges();
                } else {
                    this.toastService.show(data.error);
                }
            })
            .catch((err: ILogin.IError) => {
                this.loaderService.hideLoader();
                this.toastService.show(err.error);
            });
    }

}

