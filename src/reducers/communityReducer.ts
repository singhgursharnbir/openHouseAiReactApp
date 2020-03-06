import { FETCH_COMMUNITIES } from "../actions";
import { community, FetchCommunityTypes } from "../store/communities/types";

const initialState = {
  communities: []
};

export default function(
  state = initialState,
  action: FetchCommunityTypes
): object {
  switch (action.type) {
    case FETCH_COMMUNITIES:
      return {
        communities: action.payload
      };

    default:
      return state;
  }
}
