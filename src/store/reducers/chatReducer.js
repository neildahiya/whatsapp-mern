const initState = {
  chats: [],
};
export const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return state;

    default:
      return state;
  }
};
