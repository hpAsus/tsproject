import * as angular from 'angular';
import 'angular-translate';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-material';
import 'angular-aria';
import 'angular-local-storage';
import {appRouting} from './app-routing';
import {appLanguage} from './app-language';

import {authRouting} from './components/auth/auth.routing';
import {dashboardRouting} from './components/dashboard/dashboard.routing';

export const appModule: ng.IModule = angular.module('ts-summer', [
    'pascalprecht.translate',
    'ui.router',
    'ngMaterial',
    'LocalStorageModule'
])
.config(appRouting)
.config(authRouting)
.config(dashboardRouting)
.config(appLanguage);
