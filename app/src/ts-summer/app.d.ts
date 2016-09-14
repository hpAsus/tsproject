declare module IApp {
    interface ILanguage {
        [key: string]: string | ILanguage;
    }
}

declare module 'IApp/Interfaces' {
    export default IApp;
}
