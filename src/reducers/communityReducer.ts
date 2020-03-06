import { FETCH_COMMUNITIES } from "../actions";
import { FetchCommunityTypes } from "../store/communities/types";

//Initial state
const initialState = {
  communities: []
};

//Reducer function to serve data to the action with return type object, Also as required data is sorted before sending back

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

      //Now assign it to communities
      return {
        communities: action.payload
      };

    default:
      return state;
  }
}
