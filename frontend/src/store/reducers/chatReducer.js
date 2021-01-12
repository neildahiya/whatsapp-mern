const initState = {
  allUsers: [],
  chats: [],
  messages: [],
  active: 0,
};
export const chatReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SEND_MESSAGE":
      // console.log("in reducer");
      // console.log(action.payload);
      // const newChats = [];
      // // console.log(state);
      // // console.log(action.payload);
      // console.log(state);
      // let newMessages = state.messages;
      // newMessages.messages.push({
      //   _id: action.payload.id,
      //   text: action.payload.text,
      //   fromPerson: action.payload.fromPerson,
      //   otherPerson: action.payload.otherPerson,
      //   isSender: true,
      //   timestamp: new Date().toUTCString(),
      // });
      // const newState = { ...state };
      // console.log(newState);
      // console.log(newMessages);
      // console.log(newMessages);
      // for (var chat of state.chats) {
      //   // console.log(chat.id + " " + action.payload.id);
      //   console.log(chat);
      //   if (chat.id == action.payload.id) {
      //     let chatToPush = {
      //       id: chat.id,
      //       otherPerson: chat.otherPerson,
      //       messages: [
      //         ...chat.messages,
      //         {
      //           text: action.payload.message,
      //           isSender: true,
      //           timestamp: new Date().toUTCString(),
      //         },
      //       ],
      //     };
      //     newChats.push(chatToPush);
      //   } else {
      //     newChats.push(chat);
      //   }
      // }
      // console.log(newChats);
      return state;
    case "GOT_MESSAGES":
      // console.log(action.response);
      return {
        ...state,
        messages: action.response,
      };

    case "CHANGE_ACTIVE_CHAT":
      return {
        ...state,
        active: action.active,
      };
    case "GOT_ALL_USERS":
      return {
        ...state,
        allUsers: action.response,
      };
    default:
      return state;
  }
};
