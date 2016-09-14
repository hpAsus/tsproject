import {AppEn} from './lang/lang-en';
import {AppRu} from './lang/lang-ru';
import {AuthComponentEn} from './components/auth/lang-en';
import {AuthComponentRu} from './components/auth/lang-ru';
import {ActionButtonComponentEn} from './components/dashboard/actionButtonTest/lang-en';
import {ActionButtonComponentRu} from './components/dashboard/actionButtonTest/lang-ru';

export const languages: ng.translate.ITranslationTable = {
    en: angular.merge(
        AppEn, AuthComponentEn, ActionButtonComponentEn
    ),
    ru: angular.merge(
        AppRu, AuthComponentRu, ActionButtonComponentRu
    )
};
