import { FETCH_HOMES } from "../actions/index";
import { home, fetchHomes, FetchHomesTypes } from "../store/homes/types";

const initialState = {
  homes: []
};

export default function(state = initialState, action: FetchHomesTypes): object {
  switch (action.type) {
    case FETCH_HOMES:
      return {
        homes: action.payload
      };

    default:
      return state;
  }
}
