import { GET_USER, GET_USERS } from "../action-types";
import { UserActions } from "./interfaces";

const userInitState = {
    users: []
};

export const userReducer = (state = userInitState, actions: UserActions) => {
    const {type, payload} = actions;
    switch (type){
        case GET_USER:
            break;
        default:
            return state;
    }
    
};

export default userReducer;