import AuthService from "../../Services/AuthService";
import Chat from "../../../../api/models/Chat";

export const changeActive = (active) => {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_ACTIVE_CHAT", active });
  };
};

export const getAllUsers = (user) => async (dispatch) => {
  try {
    const response = await AuthService.register(user);
    dispatch({ type: "GOT_ALL_USERS", user });
  } catch (err) {
    dispatch({ type: "SERVER_ERROR", err });
  }
};

// Get Chat from "fromPerson" to "otherPerson", if doesn't exist, create and return
export const getChat = (payload) => {};

export const sendMessage = (payload) => {
  // Call on API to store in DB
  console.log("in action");
  return (dispatch, getState) => {
    dispatch({ type: "SEND_MESSAGE", payload });
  };
};
