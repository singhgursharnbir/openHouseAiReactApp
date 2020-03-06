import { FETCH_COMMUNITIES } from "../actions";
import { FetchCommunityTypes } from "../store/communities/types";

const initialState = {
  communities: []
};

export default function(
  state = initialState,
  action: FetchCommunityTypes
): object {
  switch (action.type) {
    case FETCH_COMMUNITIES:
      //sort the payload data first before assiging it to communities
      action.payload.sort((a: any, b: any) => {
        const communityA = a.name.toUpperCase();
        const communityB = b.name.toUpperCase();

        let comparison = 0;
        if (communityA > communityB) {
          comparison = 1;
        } else if (communityA < communityB) {
          comparison = -1;
        }
        return comparison;
      });

      return {
        communities: action.payload
      };

    default:
      return state;
  }
}
