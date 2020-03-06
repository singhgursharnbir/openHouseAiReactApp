import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import communityReducer from "./communityReducer";
import errorReducer from "./errorReducer";

const allReducers = combineReducers({
  homes: homeReducer,
  communities: communityReducer,
  errors: errorReducer
});

export default allReducers;
