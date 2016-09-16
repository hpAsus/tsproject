import {Directive} from 'wk-ng/decorators/directive';
import vars from 'wk-vars/wk-vars';
import * as inRange from 'lodash/inRange';

const maxWords: number = vars('MAX_WORDS_IN_NAME');
const minNameLength: number = vars('MIN_NAME_LENGTH');

@Directive({
    selector: '[ts-name-validator]'
})
export class TsNameValidatorDirective {

    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');

        ngModelController.$validators['tsName'] = (value: string): boolean => {
            let REGEXP: RegExp;
            if (value) {
                REGEXP = new RegExp('^(([A-Z][a-zA-Z]+)|([A-Z][a-zA-Z]+\\s+[A-Z][a-zA-Z]+))$');
                return (value) ? REGEXP.test(value) : false;
            } else {
                return false;
            }
        };

        ngModelController.$validators['tsNameWords'] = (value: string): boolean => {
            let mValue: string;
            let words: Array<string>;
            if (value) {
                mValue = value || '';
                words = mValue.split(' ');
                return inRange(words.length, 1, maxWords + 1);
            } else {
                return false;
            }
        };

        ngModelController.$validators['tsNameMinLength'] = (value: string): boolean => {
            let mValue: string;
            if (value) {
                mValue = value || '';
                return mValue.length > minNameLength;
            } else {
                return false;
            }
        };
    }
}
