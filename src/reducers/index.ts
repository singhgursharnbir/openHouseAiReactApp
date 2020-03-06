import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import communityReducer from "./communityReducer";
import errorReducer from "./errorReducer";

//merge all reducers into one to pass it to actions

const allReducers = combineReducers({
  homes: homeReducer,
  communities: communityReducer,
  errors: errorReducer
});

export default allReducers;
