import 'wk-tshelpers/helpers';
import 'es5-shim/es5-shim';
import 'es6-shim/es6-shim';
import 'document-register-element';
import 'wk-tshelpers/helpers';

import {bootstrap} from 'wk-ng/bootstrap';

import {App} from './app';
import {appModule} from './module';

import './lang';

export function run(): void {
    bootstrap(App, [], appModule);
}
