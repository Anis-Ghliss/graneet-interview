import { combineReducers } from "redux";
import { metropole } from "./metropole";
import { outreMer } from "./outreMer";

export const rootReducer = combineReducers({
  metropole,
  outreMer,
});
