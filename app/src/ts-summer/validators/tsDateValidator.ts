import {Directive} from 'wk-ng/decorators/directive';
import 'moment';
@Directive({
    selector: '[ts-date-validator]'
})
export class TsDateValidatorDirective {
    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');

        ngModelController.$validators['tsDate'] = (value: string): boolean => {
            let formatPlus: string = attrs['dateFormat']
                        .toLowerCase()
                        .replace('dd', 'd')
                        .replace('mm', 'm')
                        .toUpperCase();
            let checkPlus: boolean = moment(value, formatPlus, true).isValid();
            return (moment(value, attrs['dateFormat'], true).isValid()) || checkPlus;
        };
    }
}
