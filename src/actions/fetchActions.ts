import { FETCH_COMMUNITIES, FETCH_HOMES, ADD_ERROR } from "./index";
import { ThunkAction } from "redux-thunk";

import { FetchHomesTypes } from "../store/homes/types";
import { FetchCommunityTypes } from "../store/communities/types";
import { Action } from "redux";

//Action to fetch all communities, and catch error if there is a error while fetching data

export const fetchAllCommunities = (
  message: string
): ThunkAction<
  void,
  FetchCommunityTypes,
  unknown,
  Action<string>
> => async dispatch => {
  fetch(
    "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities"
  )
    .then(res => res.json())
    .then(communities =>
      dispatch({
        type: FETCH_COMMUNITIES,
        payload: communities
      })
    ) // Async action failed...
    .catch(err => {
      // Dispatch the generic "global errors" action
      dispatch({ type: ADD_ERROR, error: err });
    });
};

//Action to fetch all homes, and catch error if there is a error while fetching data

export const fetchAllHomes = (
  message: string
): ThunkAction<
  void,
  FetchHomesTypes,
  unknown,
  Action<string>
> => async dispatch => {
  fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes")
    .then(res => res.json())
    .then(homes =>
      dispatch({
        type: FETCH_HOMES,
        payload: homes
      })
    )
    .catch(err => {
      // Dispatch the generic "global errors" action
      dispatch({ type: ADD_ERROR, error: err });
    });
};
