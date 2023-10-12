import {
  ADD_EXERCISE,
  ADD_EXERCISE_CARD_COLOR,
  DELETE_EXERCISE,
  SET_EXERCISES,
  SET_EXERCISE_CARD_COLORS,
  SET_EXERCISE_ERROR,
  SET_EXERCISE_INPUT,
  SET_EXERCISE_LOADING,
} from "../actionConstants";
import { validateExerciseInput } from "../../utils/validationUtils";
import { allExercises } from "../../utils/exerciseUtils";
import {
  addExercise,
  deleteExercise,
  getExercises,
} from "../../services/exerciseServices";

export const exerciseInput = (userInput) => ({
  type: SET_EXERCISE_INPUT,
  payload: userInput,
});

export const addNewExercise = (userInput, userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_EXERCISE_LOADING });

    const isValidated = validateExerciseInput(userInput);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_EXERCISE_ERROR, payload: "" });
    }

    const duration = parseInt(userInput.durationMinutes);

    const caloriesBurned =
      allExercises[userInput.exerciseName].calorieRate * duration;

    const exerciseData = {
      ...userInput,
      durationMinutes: duration,
      caloriesBurned,
      userId,
    };

    const createdExercise = await addExercise(exerciseData);

    dispatch({ type: ADD_EXERCISE, payload: createdExercise });
    dispatch({ type: ADD_EXERCISE_CARD_COLOR });
  } catch (error) {
    dispatch({ type: SET_EXERCISE_ERROR, payload: error.message });
  }
};

export const getAllExercises = (userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_EXERCISE_LOADING });

    const exercises = await getExercises(userId);

    dispatch({ type: SET_EXERCISES, payload: exercises });
    dispatch({ type: SET_EXERCISE_CARD_COLORS, payload: exercises });
  } catch (error) {
    dispatch({ type: SET_EXERCISE_ERROR, payload: error.message });
  }
};

export const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    dispatch({ type: SET_EXERCISE_LOADING });

    const deletedExercise = await deleteExercise(exerciseId);

    dispatch({ type: DELETE_EXERCISE, payload: exerciseId });
  } catch (error) {
    dispatch({ type: SET_EXERCISE_ERROR, payload: error.message });
  }
};
