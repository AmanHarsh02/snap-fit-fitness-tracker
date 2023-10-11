import {
  ADD_EXERCISE,
  ADD_EXERCISE_CARD_COLOR,
  SET_EXERCISES,
  SET_EXERCISE_CARD_COLORS,
  SET_EXERCISE_ERROR,
  SET_EXERCISE_INPUT,
  SET_EXERCISE_LOADING,
} from "../actionConstants";
import randomColor from "randomcolor";

const initialState = {
  exercises: [],
  exerciseInput: {
    exerciseName: "",
    durationMinutes: 0,
  },
  exerciseLoading: false,
  exerciseError: "",
  exerciseCardColors: [],
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXERCISE_INPUT:
      return { ...state, exerciseInput: action.payload };
    case SET_EXERCISES:
      return {
        ...state,
        exercises: [...state.exercises, ...action.payload],
        exerciseLoading: false,
        exerciseError: "",
      };
    case SET_EXERCISE_CARD_COLORS:
      const exercises = action.payload;

      const cardColors = exercises.map(() =>
        randomColor({ luminosity: "light", format: "hex" })
      );

      return { ...state, exerciseCardColors: cardColors };
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        exerciseInput: {
          exerciseName: "",
          durationMinutes: 0,
        },
        exerciseLoading: false,
      };
    case ADD_EXERCISE_CARD_COLOR:
      const newColors = [...state.exerciseCardColors];
      const newColor = randomColor();

      newColors.push(newColor);

      return { ...state, exerciseCardColors: newColors };
    case SET_EXERCISE_LOADING:
      return { ...state, exerciseLoading: true };
    case SET_EXERCISE_ERROR:
      return {
        ...state,
        exerciseError: action.payload,
        exerciseLoading: false,
      };
    default:
      return { ...state };
  }
};
