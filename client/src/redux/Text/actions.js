import axios from "axios";
import { SEND_TEXT, SEND_TEXT_SUCCESS, SEND_TEXT_FAILURE } from "./types";

export const sendTextRequest = () => {
  return {
    type: SEND_TEXT,
  };
};
export const sendTextRequestFailure = (error) => {
  return {
    type: SEND_TEXT_FAILURE,
    payload: error,
  };
};
export const sendTextRequestSuccess = (text) => {
  return {
    type: SEND_TEXT_SUCCESS,
    payload: text,
  };
};

export const sendText = (text) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/iecho?text=${text}`)
      .then((res) => {
        dispatch(sendTextRequestSuccess(res.data));
      })
      .catch((error) => {
        dispatch(sendTextRequestFailure(error.message));
      });
  };
};
