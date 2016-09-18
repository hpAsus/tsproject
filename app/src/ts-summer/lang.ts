import {AppEn} from './lang/lang-en';
import {AppRu} from './lang/lang-ru';
import {AuthComponentEn} from './components/auth/lang-en';
import {AuthComponentRu} from './components/auth/lang-ru';
import {ActionButtonComponentEn} from './components/dashboard/actionButtonTest/lang-en';
import {ActionButtonComponentRu} from './components/dashboard/actionButtonTest/lang-ru';
import {DashboardComponentEn} from './components/dashboard/lang-en';
import {DashboardComponentRu} from './components/dashboard/lang-ru';
import {UsersEn} from './components/dashboard/users/lang-en';
import {UsersRu} from './components/dashboard/users/lang-ru';

export const languages: ng.translate.ITranslationTable = {
    en: angular.merge(
        AppEn,
        AuthComponentEn,
        ActionButtonComponentEn,
        DashboardComponentEn,
        UsersEn
    ),
    ru: angular.merge(
        AppRu,
        AuthComponentRu,
        ActionButtonComponentRu,
        DashboardComponentRu,
        UsersRu
    )
};
