import { FETCH_HOMES } from "../actions/index";
import { FetchHomesTypes } from "../store/homes/types";

const initialState = {
  homes: [],
  homeCount: []
};

export default function(state = initialState, action: FetchHomesTypes): object {
  switch (action.type) {
    case FETCH_HOMES:
      let homeCount: any = {};
      action.payload.forEach(function(item: any) {
        if (homeCount[item.communityId]) {
          homeCount["count" + item.communityId]++;
          homeCount[item.communityId] =
            homeCount[item.communityId] + item.price;
        } else {
          homeCount["count" + item.communityId] = 1;
          homeCount[item.communityId] = item.price;
        }
      });

      return {
        homes: action.payload,
        homeCount: homeCount
      };

    default:
      return state;
  }
}
