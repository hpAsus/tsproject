import {Component} from 'wk-ng/decorators/component';
import {QService} from './services/q-service';

@Component({
    selector: 'app',
    template: '{{vm.fi}}<ui-view></ui-view>',
    directives: [],
    providers: [QService]
})
export class App {
    fi: string;
    constructor (qService: QService) {
        this.fi = qService.field;
    }
}
