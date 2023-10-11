import {
  ADD_FOOD,
  ADD_FOOD_CARD_COLOR,
  SET_FOODS,
  SET_FOOD_CARD_COLORS,
  SET_FOOD_ERROR,
  SET_FOOD_INPUT,
  SET_FOOD_LOADING,
} from "../actionConstants";
import { validateExerciseInput } from "../../utils/validationUtils";
import { addFood, getFoods } from "../../services/foodServices";

export const foodInput = (userInput) => ({
  type: SET_FOOD_INPUT,
  payload: userInput,
});

export const addNewFood = (userInput, userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_FOOD_LOADING });

    const isValidated = validateExerciseInput(userInput);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_FOOD_ERROR, payload: "" });
    }

    const foodData = { ...userInput, userId };

    const createdFood = await addFood(foodData);

    dispatch({ type: ADD_FOOD, payload: createdFood });
    dispatch({ type: ADD_FOOD_CARD_COLOR });
  } catch (error) {
    dispatch({ type: SET_FOOD_ERROR, payload: error.message });
  }
};

export const getAllFoods = (userId) => async (dispatch) => {
  try {
    dispatch({ type: SET_FOOD_LOADING });

    const foods = await getFoods(userId);

    dispatch({ type: SET_FOODS, payload: foods });
    dispatch({ type: SET_FOOD_CARD_COLORS, payload: foods });
  } catch (error) {
    dispatch({ type: SET_FOOD_ERROR, payload: error.message });
  }
};
