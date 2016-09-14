import {Directive} from 'wk-ng/decorators/directive';
// import {isNumber} from 'lodash/isNumber';
// import {inRange} from 'lodash/inRange';

const ageMin: number = 18;
const ageMax: number = 65;

@Directive({
    selector: '[ts-age-validator]'
})
export class TsAgeValidatorDirective {

    ngLink(scope: ng.IScope, el: JQuery, attrs: ng.IAttributes): void {
        let ngModelController: ng.INgModelController = el.data('$ngModelController');
        ngModelController.$validators['tsAge'] = (value: string): boolean => {
            let valueNumber: number = parseInt(value, 10);
            return _.isNumber(valueNumber) && (_.inRange(valueNumber, ageMin, ageMax + 1));
        };
    }
}

// AGE Validator
// =====================================================================================================================
// (function () {
//     var atAgeValidatorFunc = function (CONST) {
//         return {
//             require: 'ngModel',
//             restrict: 'A',
//             link: function (scope, elem, attrs, ctrl) {
//
//                 // Age Integer Check
//                 ctrl.$validators.ageInteger = function (modelValue) {
//                     return _.isNumber(parseInt(modelValue, 10)) && !_.isNaN(parseInt(modelValue, 10));
//                 };
//
//                 ctrl.$validators.ageValidator = function (modelValue) {
//                     return _.inRange(parseInt(modelValue, 10), CONST.AGE_MINIMUM, CONST.AGE_MAXIMUM + 1);
//                 };
//
//             }
//         };
//     };
//     angular.module('app.profile').directive('atAgeValidator', ['CONST', atAgeValidatorFunc]);
// })();
