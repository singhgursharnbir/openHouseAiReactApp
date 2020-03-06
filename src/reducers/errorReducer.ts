import { ADD_ERROR } from "../actions";

let errorMessage: String = "";

//Function to handle error and send make eror which has been caught

export default function(state = errorMessage, action: any): object {
  switch (action.type) {
    case ADD_ERROR:
      return (errorMessage = action.error);
    default:
      return state;
  }
}
