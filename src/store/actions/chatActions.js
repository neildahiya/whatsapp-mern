export const changeActive = (active) => {
  return (dispatch, getState) => {
    dispatch({ type: "CHANGE_ACTIVE_CHAT", active });
  };
};
export const sendMessage = (payload) => {
  // Call on API to store in DB
  console.log("in action");
  return (dispatch, getState) => {
    dispatch({ type: "SEND_MESSAGE", payload });
  };
};
