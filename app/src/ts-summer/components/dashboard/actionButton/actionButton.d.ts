declare module IActionButton {

    interface IActionItem {
        title: string;
        action: Function;
        callback?: Function;
        errorCallback?: Function;
    }

    interface IButtonsStorage {
        [index: string]: Array<IActionButton.IActionItem>;
    }

}

declare module 'IActionButton/Interfaces' {
    export default IActionButton;
}
