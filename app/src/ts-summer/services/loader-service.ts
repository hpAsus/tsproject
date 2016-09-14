import {Injectable} from 'wk-ng/decorators/injectable';
// import IAugmentedJQuery = angular.IAugmentedJQuery;

@Injectable()
export class LoaderService {
    private _loader: ng.IAugmentedJQuery;

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
            this._loader = angular.element(loaderContainer);
            body.append(this._loader);
        } else {
            this.hideLoader();
        }
    }

    // Show loader
    // =================================================================================================================
    showLoader (): void {
        if (document.getElementsByClassName('loader-overlay').length) {
            this._loader.removeClass('none');
        }
    }

    // Hide loader
    // =================================================================================================================
    hideLoader (): void {
        this._loader.addClass('none');
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
