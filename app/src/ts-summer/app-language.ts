import vars from 'wk-vars/wk-vars';

export function appLanguage($translateProvider: ng.translate.ITranslateProvider): void {
    let language: string = vars('defaultLanguage');

    $translateProvider.preferredLanguage(language);
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}
