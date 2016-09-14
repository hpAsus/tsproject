import {Component}   from 'wk-ng/decorators/component';
import {template} from './actionButton.tpl';
import {Input} from 'wk-ng/decorators/input';
import {ActionButtonService} from './actionButton.service';
import {ActionItemComponent} from './actionItem/actionItem.component';

@Component({
    selector: 'ts-action-button',
    template: template,
    directives: [ActionItemComponent],
    providers: [ActionButtonService]
})
export class ActionButtonComponent {
    @Input('@buttonTitle') buttonTitle: string;
    @Input('=ngModel') actions: Array<IActionButton.IActionItem>;

    showActionsMenu: boolean = false;

    // Open/Close Function
    showActions(): void {
        this.showActionsMenu = this.showActionsMenu ? false : true;
    };


}
