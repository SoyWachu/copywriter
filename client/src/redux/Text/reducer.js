import { SEND_TEXT, SEND_TEXT_SUCCESS, SEND_TEXT_FAILURE } from "./types";

const initialState = {
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TEXT: {
      return {
        ...state,
      };
    }
    case SEND_TEXT_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.payload.text],
        error: "",
      };
    }
    case SEND_TEXT_FAILURE: {
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
