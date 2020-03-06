import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import communityReducer from "./communityReducer";

const allReducers = combineReducers({
  homes: homeReducer,
  communities: communityReducer
});

export default allReducers;
