import {Component} from 'wk-ng/decorators/component';
import {AuthPageComponent} from './components/auth/auth.component';
import {DashboardPageComponent} from './components/dashboard/dashboard.component';

@Component({
    selector: 'app',
    template: '<ui-view></ui-view>',
    directives: [AuthPageComponent, DashboardPageComponent]
})
export class App {}
