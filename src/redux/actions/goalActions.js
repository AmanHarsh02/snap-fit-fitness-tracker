import {
  ADD_GOAL,
  ADD_GOAL_CARD_COLOR,
  DELETE_GOAL,
  SET_GOALS,
  SET_GOAL_CARD_COLORS,
  SET_GOAL_ERROR,
  SET_GOAL_INPUT,
  SET_GOAL_LOADING,
} from "../actionConstants";
import { validateGoalInput } from "../../utils/validationUtils";
import { addGoal, deleteGoal, getGoals } from "../../services/goalServices";

export const goalInput = (userInput) => ({
  type: SET_GOAL_INPUT,
  payload: userInput,
});

export const addNewGoal = (userInput, userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_GOAL_LOADING });

    const date = new Date();
    const targetDate = new Date(userInput.targetDate);

    if (targetDate <= date) {
      throw new Error("Please select the target date in future");
    } else {
      dispatch({ type: SET_GOAL_ERROR, payload: "" });
    }

    const isValidated = validateGoalInput(userInput);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_GOAL_ERROR, payload: "" });
    }

    const goalData = { ...userInput, userId };

    const createdGoal = await addGoal(goalData);

    dispatch({ type: ADD_GOAL, payload: createdGoal });
    dispatch({ type: ADD_GOAL_CARD_COLOR });
  } catch (error) {
    dispatch({ type: SET_GOAL_ERROR, payload: error.message });
  }
};

export const getAllGoals = (userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_GOAL_LOADING });

    const goals = await getGoals(userId);

    dispatch({ type: SET_GOALS, payload: goals });
    dispatch({ type: SET_GOAL_CARD_COLORS, payload: goals });
  } catch (error) {
    dispatch({ type: SET_GOAL_ERROR, payload: error.message });
  }
};

export const removeGoal = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: SET_GOAL_LOADING });

    const deletedGoal = await deleteGoal(goalId);

    dispatch({ type: DELETE_GOAL, payload: goalId });
  } catch (error) {
    dispatch({ type: SET_GOAL_ERROR, payload: error.message });
  }
};
