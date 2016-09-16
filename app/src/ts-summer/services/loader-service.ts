import {Injectable} from 'wk-ng/decorators/injectable';
// import IAugmentedJQuery = angular.IAugmentedJQuery;

@Injectable()
export class LoaderService {

    // Add loader
    // =================================================================================================================
    addLoader (): void {
        // check if loader already exists id dom
        if (!document.getElementsByClassName('loader-overlay').length) {

            let loaderContainer: HTMLDivElement = document.createElement('div');
            let spin: HTMLDivElement = document.createElement('div');
            let body: ng.IAugmentedJQuery = angular.element(document.getElementsByTagName('body'));

            loaderContainer.classList.add('loader-overlay');
            loaderContainer.classList.add('none');

            spin.className = 'spin';
            loaderContainer.appendChild(spin);
            body.append(angular.element(loaderContainer));
        } else {
            this.hideLoader();
        }
    }

    // Show loader
    // =================================================================================================================
    showLoader (): void {
        let loader: Element = document.getElementsByClassName('loader-overlay')[0];
        if (loader) {
            loader.classList.remove('none');
        }
    }

    // Hide loader
    // =================================================================================================================
    hideLoader (): void {
        let loader: Element = document.getElementsByClassName('loader-overlay')[0];
        if (loader) {
            loader.classList.add('none');
        }
    }

    // Clear all loaders
    // =================================================================================================================
    clearLoaders (): void {
        let loaders: NodeListOf<Element> = document.getElementsByClassName('loader-overlay');
        if (loaders.length) {
            document.body.removeChild(loaders[0]);
        }
    }
}
