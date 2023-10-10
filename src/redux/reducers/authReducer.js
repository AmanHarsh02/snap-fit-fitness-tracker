import {
  SET_SIGNUP_ERROR,
  SET_USER_LOGIN_INPUT,
  SET_USER_SIGNUP_INPUT,
  RESET_SIGNUP,
  SET_USER_DATA,
  SET_AUTH_LOADING,
  SET_LOGIN_ERROR,
  RESET_LOGIN,
  USER_LOGOUT,
} from "../actionConstants";

const initialState = {
  user: {},
  isLoggedIn: false,
  authLoading: false,
  loginInputFields: {
    email: "",
    password: "",
  },
  signupInputFields: {
    email: "",
    password: "",
    profilePictureUrl: "",
    username: "",
  },
  signupError: "",
  loginError: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN_INPUT:
      return { ...state, loginInputFields: action.payload };
    case SET_USER_SIGNUP_INPUT:
      return { ...state, signupInputFields: action.payload };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        authLoading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case SET_AUTH_LOADING:
      return { ...state, authLoading: true };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: action.payload, authLoading: false };
    case SET_SIGNUP_ERROR:
      return { ...state, signupError: action.payload, authLoading: false };
    case RESET_LOGIN:
      return {
        ...state,
        loginInputFields: {
          email: "",
          password: "",
        },
        loginError: "",
      };
    case RESET_SIGNUP:
      return {
        ...state,
        signupInputFields: {
          email: "",
          password: "",
          profilePictureUrl: "",
          username: "",
        },
        signupError: "",
      };
    default:
      return { ...state };
  }
};
