declare module ILogin {

    interface ICredentials {
        email: string;
        password?: string;
    }

    interface IUserData extends ICredentials {
        name: string;
        birthdate: string;
        age: string;
        bio: string;
        role: string;
    }

    interface IError {
        success: boolean;
        error: string;
    }

    interface IServerResponse {
        success: boolean;
        user: ILogin.IUserData;
        error?: string;
    }
}

declare module 'ILogin/Interfaces' {
    export default ILogin;
}
