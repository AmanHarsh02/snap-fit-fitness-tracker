import {
  ADD_GOAL,
  ADD_GOAL_CARD_COLOR,
  DELETE_GOAL,
  RESET_GOAL,
  SET_GOALS,
  SET_GOAL_CARD_COLORS,
  SET_GOAL_ERROR,
  SET_GOAL_INPUT,
  SET_GOAL_LOADING,
} from "../actionConstants";
import randomColor from "randomcolor";

const initialState = {
  goals: [],
  goalInput: {
    goalName: "",
    goalDescription: "",
    targetDate: "",
    targetCaloriesValue: 0,
    status: "In Progress",
  },
  goalLoading: false,
  goalError: "",
  goalCardColors: [],
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOAL_INPUT:
      return { ...state, goalInput: action.payload };
    case SET_GOALS:
      return {
        ...state,
        goals: [...state.goals, ...action.payload],
        goalLoading: false,
        goalError: "",
      };
    case SET_GOAL_CARD_COLORS:
      const goals = action.payload;

      const cardColors = goals.map(() =>
        randomColor({ luminosity: "light", format: "hex" })
      );

      return { ...state, goalCardColors: cardColors };
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload],
        goalInput: {
          goalName: "",
          goalDescription: "",
          targetDate: "",
          targetCaloriesValue: 0,
          status: "In Progress",
        },
        goalLoading: false,
      };
    case ADD_GOAL_CARD_COLOR:
      const newColors = [...state.goalCardColors];
      const newColor = randomColor();

      newColors.push(newColor);

      return { ...state, goalCardColors: newColors };
    case DELETE_GOAL:
      const goalId = action.payload;
      let colorIndex = 0;
      const updatedGoals = state.goals.filter(({ _id }, i) => {
        if (_id === goalId) {
          colorIndex = i;
        }
        return _id !== goalId;
      });

      const updatedColors = state.goalCardColors.filter(
        (_, i) => i !== colorIndex
      );

      return {
        ...state,
        goals: updatedGoals,
        goalCardColors: updatedColors,
      };
    case SET_GOAL_LOADING:
      return { ...state, goalLoading: true };
    case SET_GOAL_ERROR:
      return {
        ...state,
        goalError: action.payload,
        goalLoading: false,
      };
    case RESET_GOAL:
      return {
        ...state,
        goalInput: {
          goalName: "",
          goalDescription: "",
          targetDate: "",
          targetCaloriesValue: 0,
          status: "In Progress",
        },
        goalError: "",
      };
    default:
      return { ...state };
  }
};
