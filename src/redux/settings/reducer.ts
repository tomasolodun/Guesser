import { GET_SETTINGS, UPDATE_SETTINGS } from "../action-types";
import { SettingsActions } from "./interfaces";

const settingsInitState = {
    isHintModeEnabled: false,
    difficult: {retriesCount: 12, numberFrom: -10000, numberTo: 10000}
};

export const settingsReducer = (state = settingsInitState, actions: SettingsActions) => {
    const {type, payload} = actions;
    switch (type){
        case GET_SETTINGS:

            break;
        case UPDATE_SETTINGS:
            return {...state, ...payload}
        default:
            return state;
    }
    
};

export default settingsReducer;