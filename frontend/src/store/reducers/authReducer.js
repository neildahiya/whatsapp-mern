const initState = {
  isLoggedIn: false,
  user: null,
  loginErr: false,
  loginErrMsg: "",
  registerErr: false,
  registerErrMsg: "",
};
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        registerErr: true,
        registerErrMsg: action.err,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        loginErr: false,
        loginErrMsg: "",
        registerErr: false,
        registerErrMsg: "",
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loginErr: true,
        loginErrMsg: action.err,
      };
    default:
      return state;
  }
};
