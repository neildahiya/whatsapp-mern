const initState = {
  isLoggedIn: false,
  userId: "",
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      return state;
    default:
      return state;
  }
};
