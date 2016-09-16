import {Directive} from 'wk-ng/decorators/directive';
import * as isNumber from 'lodash/isNumber';
import * as inRange from 'lodash/inRange';
import vars from 'wk-vars/wk-vars';

const ageMin: number = vars('AGE_MINIMUM');
const ageMax: number = vars('AGE_MAXIMUM');

@Directive({
    selector: '[ts-age-validator]'
})
export class TsAgeValidatorDirective {

    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');
        ngModelController.$validators['tsAge'] = (value: string): boolean => {
            let valueNumber: number = parseInt(value, 10);
            return isNumber(valueNumber) && (inRange(valueNumber, ageMin, ageMax + 1));
        };
    }
}
