import {Injectable} from 'wk-ng/decorators/injectable';
import * as pick from 'lodash/pick';
import * as defaults from 'lodash/defaults';
import * as keys from 'lodash/keys';

@Injectable()
export class ActionButtonService {
    private actionDefaults: IActionButton.IActionItem = {
        title: 'ACTION_TITLE',
        action: null,
        callback: null,
        errorCallback: null
    };
    private buttonsStorage: IActionButton.IButtonsStorage = {};


    // Add Button
    addButton(name: string): void {
        this.buttonsStorage[name] = [];
    }

    // Add action to Factory
    addAction(button: string, actionObj: IActionButton.IActionItem): void {
        let options: IActionButton.IActionItem =
            <IActionButton.IActionItem> pick(defaults(actionObj, this.actionDefaults), keys(this.actionDefaults));
        this.buttonsStorage[button].push(options);
    }

    // Get all avaliable actions
    getActions(button: string): Array<IActionButton.IActionItem> {
        return this.buttonsStorage[button];
    }

    // Clear actions
    clearActions(button: string): void {
        if (this.buttonsStorage[button]) {
            this.buttonsStorage[button] = [];
        }
    }

}
