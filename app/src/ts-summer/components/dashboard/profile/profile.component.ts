import {Component} from 'wk-ng/decorators/component';
import {template} from './profile.tpl';
import {ViewProfilePageComponent} from './view/viewProfile.component';
import {EditProfilePageComponent} from './edit/editProfile.component';
import {ProfileService} from './services/profile-service';

@Component({
    selector: 'profile-component',
    template: template,
    directives: [ViewProfilePageComponent, EditProfilePageComponent],
    providers: [ProfileService]
})
export class ProfilePageComponent {
}
