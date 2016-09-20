import {Component} from "wk-ng/decorators/component";
import {template}  from './new-user.tpl';
import {Output} from "wk-ng/decorators/output";

@Component({
    selector: 'new-user-modal',
    template: template
})

export class NewUserComponent {
    @Output() closeModal: Function;

    constructor() {}
}
