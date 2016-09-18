import {ModalApi} from 'wk-ui/components/modal/modalModel';

export class UpdateUserController {
    locals: any;
    modal: ModalApi;

    login: string;

    constructor(locals: any) {
        this.login = locals.login;
        this.modal = locals.modal;

        this.locals = locals;

    }

    modalClose(): void {
        this.modal.close();
    }
}
