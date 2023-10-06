export const SET_USER_LOGIN_INPUT = "set_user_login_input";

export const userLoginInput = (userInput) => ({
  type: SET_USER_LOGIN_INPUT,
  payload: userInput,
});
