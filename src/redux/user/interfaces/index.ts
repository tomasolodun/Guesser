import { CREATE_USER, DELETE_USER, GET_USER, GET_USERS, UPDATE_USER } from "../../action-types";

export interface IUser{
    id: number;
    firstName: string;
    lastName: string;
    commonName: string;
    mail: string;
}

export interface ICreateUser {
    type: typeof CREATE_USER;
    payload: IUser;
}

export interface IGetUser {
    type: typeof GET_USER;
    payload: IUser;
}

export interface IGetUsers {
    type: typeof GET_USERS;
    payload: Array<IUser>;
}

export interface IUpdateUser {
    type: typeof UPDATE_USER;
    payload: IUser;
}

export interface IDeleteUser {
    type: typeof DELETE_USER;
    payload: IUser;
}


export interface IUserReducer {
    Users: Array<IUser>;
}



export type UserActions = ICreateUser | IGetUser | IGetUsers | IUpdateUser | IDeleteUser;