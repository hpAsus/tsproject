declare module ILogin {

    interface ICredentials {
        email: string;
        password: string;
    }
}

declare module 'ILogin/Interfaces' {
    export default ILogin;
}
