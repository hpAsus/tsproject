import {Injectable} from 'wk-ng/decorators/injectable';

@Injectable()
export class ToastService {

    // public static $inject = ['$mdToast'];

    constructor(private $mdToast: angular.material.IToastService) { }

    // show toast
    show(message: string): Promise<any> {
        return this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(1000)
        );
    }


}
