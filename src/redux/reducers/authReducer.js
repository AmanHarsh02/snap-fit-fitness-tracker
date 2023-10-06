import { SET_USER_LOGIN_INPUT } from "../actions/userActions";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
  loginInputFields: {
    email: "",
    password: "",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN_INPUT:
      return { ...state, loginInputFields: action.payload };
    default:
      return { ...state };
  }
};
