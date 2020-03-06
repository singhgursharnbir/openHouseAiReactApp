import { FETCH_HOMES } from "../actions/index";
import { FetchHomesTypes } from "../store/homes/types";

//define inital state for both homes as array and home counts with prices as array
const initialState = {
  homes: [],
  homeCount: []
};

//Reducer function to serve data to action realted to homes

export default function(state = initialState, action: FetchHomesTypes): object {
  switch (action.type) {
    case FETCH_HOMES:
      //First of all lets get the array of homeCount which has community id as key and then total price in that community for those house
      //and to get average we have unique count key which keeps count of each community while mapping
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

      //Lets return homes and homeCount
      return {
        homes: action.payload,
        homeCount: homeCount
      };

    default:
      return state;
  }
}
