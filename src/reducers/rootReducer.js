import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import deskReducer from "./deskReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    userReducer,
    deskReducer,
    projectReducer
  });
