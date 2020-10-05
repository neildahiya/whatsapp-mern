import AuthService from "../../Services/AuthService";
export const register = (user) => async (dispatch) => {
  try {
    const response = await AuthService.register(user);
    dispatch({ type: "SIGNUP_SUCCESS", user });
  } catch (err) {
    dispatch({ type: "SIGNUP_FAILED", err });
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const response = await AuthService.login(user);
    dispatch({ type: "LOGIN_SUCCESS", user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILED", err });
  }
};
