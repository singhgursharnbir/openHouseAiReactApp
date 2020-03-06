import { ADD_ERROR } from "../actions";

let errorMessage: String = "";

export default function(state = errorMessage, action: any): object {
  switch (action.type) {
    case ADD_ERROR:
      return (errorMessage = action.error);
    default:
      return state;
  }
}
