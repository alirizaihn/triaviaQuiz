
import { SET_SCORE, SET_QUESTIONS, SET_STEP, SET_SELECTED_OPTIONS, SET_INDEX, CLEAR } from './types';

const initialState = {
  score: 0,
  questions: [],
  step: 1,
  selectedOptions: {},
  index: 0,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload
      };
    case SET_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: action.payload
      };
    case SET_INDEX:
      return {
        ...state,
        index: action.payload
      };
    case CLEAR:
      return {
        initialState
      }
    default:
      return state;
  }
};