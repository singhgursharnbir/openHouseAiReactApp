import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import thunk from "redux-thunk";

//declare initial state to be empty
const initialState = {};

//assign thunk middleware to const
const middleware = [thunk];

//Create store with all reducers, initial state and apply the thunk as a middle ware to handle async requests
const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
