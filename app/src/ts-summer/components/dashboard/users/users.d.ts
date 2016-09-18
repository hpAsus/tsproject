declare module IUsers {

    interface IUserData {
        email: string;
        password: string;
        name: string;
        birthdate: string;
        age: string;
        bio: string;
        role: string;
    }

    interface IUsersList {
        [key: number]: IUserData;
    }

    interface IError {
        success: boolean;
        error: string;
    }

    interface IServerResponse {
        success: boolean;
        users: IUsers.IUsersList;
        data?: Array<IUsers.IUserData>;
        error?: string;
    }
}

declare module 'IUsers/Interfaces' {
    export default IUsers;
}
