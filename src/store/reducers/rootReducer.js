import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";

const rootReducer = combineReducers({
  chats: chatReducer,
});

export default rootReducer;
