import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  chats: chatReducer,
  auth: authReducer,
});

export default rootReducer;
