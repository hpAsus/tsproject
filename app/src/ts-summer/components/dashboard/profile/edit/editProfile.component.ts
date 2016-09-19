import {Component} from 'wk-ng/decorators/component';
import {template} from './editProfile.tpl';
import vars from 'wk-vars/wk-vars';
import {UserDataService} from '../../../../services/user-data-service';
import {ProfileService} from '../services/profile-service';
import {ToastService} from '../../../../services/toast-service';
import {LoaderService} from '../../../../services/loader-service';
import {TsAgeValidatorDirective} from '../../../../validators/tsAgeValidator';
import {TsBioValidatorDirective} from '../../../../validators/tsBioValidator';
import {TsDateValidatorDirective} from '../../../../validators/tsDateValidator';
import {TsNameValidatorDirective} from '../../../../validators/tsNameValidator';

@Component({
    selector: 'edit-profile-component',
    template: template,
    directives: [
        TsAgeValidatorDirective,
        TsBioValidatorDirective,
        TsDateValidatorDirective,
        TsNameValidatorDirective
    ],
    providers: []
})
export class EditProfilePageComponent {
    user: ILogin.IUserData;
    nameMaxWords: number = vars('MAX_WORDS_IN_NAME');
    minAge: number = vars('AGE_MINIMUM');
    maxAge: number = vars('AGE_MAXIMUM');
    bioMaxLength: number = vars('MAX_BIO_LENGTH');

    constructor(private userDataService: UserDataService,
                private profileService: ProfileService,
                private toastService: ToastService,
                private $state: ng.ui.IStateService,
                private loaderService: LoaderService) {

        loaderService.addLoader();
        this.user = this.userDataService.getUserData();
    }


    submitProfileUpdateForm(): void {
        this.loaderService.showLoader();

        this.profileService.updateUserProfile(this.user)
            .then((data: ILogin.IServerResponse) => {
                if (data.success) {
                    this.userDataService.setUserData(data.user);
                    this.$state.go('viewProfile');
                    this.loaderService.hideLoader();
                } else {
                    this.loaderService.hideLoader();
                    this.toastService.show(data.error);
                }
            })
            .catch((err: ILogin.IError) => {
                this.loaderService.hideLoader();
                this.toastService.show(err.error);
            });
    }
}
