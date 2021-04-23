import { Store } from "../root";
import { IUser } from "./interfaces";

export const selectorGetUsers = (store : Store) : any => {
    return store.userRedux?.users;
}