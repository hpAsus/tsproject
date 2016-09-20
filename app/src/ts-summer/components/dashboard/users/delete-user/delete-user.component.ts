import {Component} from "wk-ng/decorators/component";
import {template}  from './delete-user.tpl';
import {Output} from "wk-ng/decorators/output";
import {Input} from "wk-ng/decorators/input";

@Component({
    selector: 'delete-user-modal',
    template: template
})

export class DeleteUserComponent {
    @Input() login: string;
    @Output() closeModal: Function;


    constructor() {}
}
