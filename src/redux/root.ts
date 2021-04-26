import { userReducer } from "./user/reducer";
import { combineReducers } from "redux"
import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import settingsReducer from "./settings/reducer";

const rootReducer = combineReducers({userRedux: userReducer, settingsRedux: settingsReducer});

const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type Store = ReturnType<typeof rootReducer>;

export default store;