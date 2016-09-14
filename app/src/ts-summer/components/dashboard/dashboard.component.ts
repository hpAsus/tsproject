import {Component} from 'wk-ng/decorators/component';
import {template} from './dashboard.tpl';
import {ProfilePageComponent} from './profile/profile.component';
import {ActionButtonTestComponent} from './actionButtonTest/actionButtonTest.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {UsersComponent} from './users/users.component';

import {ToastService} from '../../services/toast-service';

@Component({
    selector: 'dashboard-page',
    template: template,
    directives: [ProfilePageComponent, ActionButtonTestComponent, FeedbackComponent, UsersComponent],
    providers: [ToastService]
})
export class DashboardPageComponent {
}
