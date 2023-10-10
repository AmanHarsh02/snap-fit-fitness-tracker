import {
  SET_USER_LOGIN_INPUT,
  SET_USER_SIGNUP_INPUT,
  SET_LOGIN_ERROR,
  SET_SIGNUP_ERROR,
  SET_USER_DATA,
  SET_AUTH_LOADING,
  USER_LOGOUT,
} from "../actionConstants";
import { login, signup } from "../../services/authServices";
import {
  validateSignupInput,
  validateLoginInput,
} from "../../utils/validationUtils";

export const userLoginInput = (userInput) => ({
  type: SET_USER_LOGIN_INPUT,
  payload: userInput,
});

export const userSignupInput = (userInput) => ({
  type: SET_USER_SIGNUP_INPUT,
  payload: userInput,
});

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTH_LOADING });

    const isValidated = validateLoginInput(email, password);

    if (!isValidated) {
      throw new Error("Please fill all the required fields");
    }

    const userData = await login(email, password);

    const { user, token } = userData;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    dispatch({ type: SET_USER_DATA, payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_LOGIN_ERROR, payload: error.message });
  }
};

export const userSignup = (userDetails) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTH_LOADING });

    const isValidated = validateSignupInput(userDetails);

    if (!isValidated) {
      throw new Error("Please fill all the required fields");
    }

    const userData = await signup(userDetails);

    const { createdUser, token } = userData;

    localStorage.setItem("user", JSON.stringify(createdUser));
    localStorage.setItem("token", token);

    dispatch({ type: SET_USER_DATA, payload: createdUser });
  } catch (error) {
    dispatch({ type: SET_SIGNUP_ERROR, payload: error.message });
  }
};

export const userLogOut = () => async (dispatch) => {
  localStorage.removeItem("user", "");
  localStorage.removeItem("token", "");

  dispatch({ type: USER_LOGOUT });
};
