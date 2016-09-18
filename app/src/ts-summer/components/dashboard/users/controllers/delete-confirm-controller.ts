import {ModalApi} from 'wk-ui/components/modal/modalModel';

export class DeleteConfirmController {
    locals: any;
    modal: ModalApi;
    closeModal: Function;

    constructor(locals: any) {
        this.modal = locals.modal;
        this.locals = locals;

    }

    modalClose(): void {
        this.modal.close();
    }
}
