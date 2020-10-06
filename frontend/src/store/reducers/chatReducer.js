const initState = {
  allUsers: [],
  chats: [
    {
      id: 0,
      otherPerson: "Matty Healy",
      messages: [
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: false,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: false,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
      ],
    },
    {
      id: 1,
      otherPerson: "Adam Hann",
      messages: [
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: false,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: false,
          timestamp: new Date().toUTCString(),
        },
        {
          text: "Hello Neil",
          isSender: true,
          timestamp: new Date().toUTCString(),
        },
      ],
    },
  ],
  messages: [],
  active: 0,
};
export const chatReducer = (state = initState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "SEND_MESSAGE":
      // console.log("in reducer");
      // console.log(action.payload);
      const newChats = [];
      for (var chat of state.chats) {
        // console.log(chat.id + " " + action.payload.id);
        if (chat.id == action.payload.id) {
          let chatToPush = {
            id: chat.id,
            otherPerson: chat.otherPerson,
            messages: [
              ...chat.messages,
              {
                text: action.payload.message,
                isSender: true,
                timestamp: new Date().toUTCString(),
              },
            ],
          };
          newChats.push(chatToPush);
        } else {
          newChats.push(chat);
        }
      }
      // console.log(newChats);
      return {
        ...state,
        chats: newChats,
      };
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
