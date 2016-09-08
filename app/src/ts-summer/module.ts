import * as angular from 'angular';
import 'angular-translate';
import 'angular-ui-router';
import {appRouting} from './app-routing';
import {appLanguage} from './app-language';

import {authRouting} from './components/auth/auth.routing';

export const appModule: ng.IModule = angular.module('ts-summer', [
    'pascalprecht.translate',
    'ui.router'
])
.config(appRouting)
.config(authRouting)
.config(appLanguage);
