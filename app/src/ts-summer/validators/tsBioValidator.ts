import {Directive} from 'wk-ng/decorators/directive';
import vars from 'wk-vars/wk-vars';

const minBioLength: number = vars('MIN_BIO_LENGTH');

@Directive({
    selector: '[ts-bio-validator]'
})
export class TsBioValidatorDirective {
    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');

        ngModelController.$validators['tsBio'] = (value: string): boolean => {
            if (value) {
                return value.length >= minBioLength;
            }

        };
    }
}
