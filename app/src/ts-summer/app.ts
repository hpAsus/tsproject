import {Component} from 'wk-ng/decorators/component';
import {AuthPageComponent} from './components/auth/auth.component';

import {QService} from './services/q-service';

@Component({
    selector: 'app',
    template: '<ui-view></ui-view>',
    directives: [AuthPageComponent],
    providers: [QService]
})
export class App {}
