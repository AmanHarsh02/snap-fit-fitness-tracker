import {
  ADD_FOOD,
  ADD_FOOD_CARD_COLOR,
  SET_FOODS,
  SET_FOOD_CARD_COLORS,
  SET_FOOD_ERROR,
  SET_FOOD_INPUT,
  SET_FOOD_LOADING,
  RESET_FOOD,
  DELETE_FOOD,
} from "../actionConstants";
import randomColor from "randomcolor";

const initialState = {
  foods: [],
  foodInput: {
    foodName: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  },
  foodLoading: false,
  foodError: "",
  foodCardColors: [],
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_INPUT:
      return { ...state, foodInput: action.payload };
    case SET_FOODS:
      return {
        ...state,
        foods: [...action.payload],
        foodLoading: false,
        foodError: "",
      };
    case SET_FOOD_CARD_COLORS:
      const foods = action.payload;

      const cardColors = foods.map(() =>
        randomColor({ luminosity: "light", format: "hex" })
      );

      return { ...state, foodCardColors: cardColors };
    case ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload],
        foodInput: {
          foodName: "",
          calories: 0,
          protein: 0,
          carbohydrates: 0,
          fat: 0,
        },
        foodLoading: false,
      };
    case ADD_FOOD_CARD_COLOR:
      const newColors = [...state.foodCardColors];
      const newColor = randomColor();

      newColors.push(newColor);

      return { ...state, foodCardColors: newColors };
    case SET_FOOD_LOADING:
      return { ...state, foodLoading: true };
    case SET_FOOD_ERROR:
      return {
        ...state,
        foodError: action.payload,
        foodLoading: false,
      };
    case DELETE_FOOD:
      const foodId = action.payload;
      let colorIndex = 0;
      const updatedFoods = state.foods.filter(({ _id }, i) => {
        if (_id === foodId) {
          colorIndex = i;
        }
        return _id !== foodId;
      });

      const updatedColors = state.foodCardColors.filter(
        (_, i) => i !== colorIndex
      );

      return {
        ...state,
        foods: updatedFoods,
        foodCardColors: updatedColors,
      };
    case RESET_FOOD:
      return {
        ...state,
        foodInput: {
          foodName: "",
          calories: 0,
          protein: 0,
          carbohydrates: 0,
          fat: 0,
        },
        foodError: "",
      };
    default:
      return { ...state };
  }
};
