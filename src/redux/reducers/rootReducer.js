import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { exerciseReducer } from "./exerciseReducer";

export const rootReducer = combineReducers({
  authState: authReducer,
  exerciseState: exerciseReducer,
});
