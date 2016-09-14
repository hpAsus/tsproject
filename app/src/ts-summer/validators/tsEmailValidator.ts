import {Directive} from 'wk-ng/decorators/directive';

@Directive({
    selector: '[ts-email-validator]'
})
export class TsEmailValidatorDirective {

    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');
        let REGEXP: RegExp = new RegExp('^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]' +
            '*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|' +
            '[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$', 'i');
        ngModelController.$validators['tsEmail'] = (value: string): boolean => {
            return REGEXP.test(value);
        };
    }
}
