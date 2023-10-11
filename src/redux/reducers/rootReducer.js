import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { exerciseReducer } from "./exerciseReducer";
import { foodReducer } from "./foodReducer";

export const rootReducer = combineReducers({
  authState: authReducer,
  exerciseState: exerciseReducer,
  foodState: foodReducer,
});
