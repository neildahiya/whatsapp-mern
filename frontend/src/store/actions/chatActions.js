import AuthService from "../../Services/AuthService";
import ChatService from "../../Services/ChatService";
export const changeActive = (active) => {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_ACTIVE_CHAT", active });
  };
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await AuthService.getAllUsers();

    dispatch({ type: "GOT_ALL_USERS", response });
  } catch (err) {
    dispatch({ type: "SERVER_ERROR", err });
  }
};

// Get Chat from "fromPerson" to "otherPerson", if doesn't exist, create and return
export const getAllMessages = (payload) => async (dispatch) => {
  // console.log("In get all messages action");
  // console.log(payload);
  try {
    const response = await ChatService.getAllMessages(payload);
    dispatch({ type: "GOT_MESSAGES", response });
  } catch (err) {
    // console.log(err);
    dispatch({ type: "SERVER_ERROR", err });
  }
};

export const sendMessage = (payload) => async (dispatch) => {
  try {
    const response = await ChatService.sendMessage(payload);
    // console.log(response);
    dispatch({ type: "SEND_MESSAGE", payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: "ERROR_SENDING_MESSAGE", err });
  }
};
