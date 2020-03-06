import { FETCH_COMMUNITIES, FETCH_HOMES } from "./index";
import { ThunkAction } from "redux-thunk";

import { home, fetchHomes, FetchHomesTypes } from "../store/homes/types";
import { community, FetchCommunityTypes } from "../store/communities/types";
import { Action } from "redux";

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
    );
};

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
    );
};
