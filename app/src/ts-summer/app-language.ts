import vars from 'wk-vars/wk-vars';
import {languages} from './lang';

export function appLanguage($translateProvider: ng.translate.ITranslateProvider): void {
    let language: string = vars('defaultLanguage');

    $translateProvider.preferredLanguage(language);
    $translateProvider.translations(language, languages[language]);
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}
