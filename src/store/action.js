import { SET_SCORE, SET_QUESTIONS, SET_STEP, SET_SELECTED_OPTIONS, SET_INDEX, CLEAR } from './types';

export const setScore = (data) => {
  return dispatch => {
    dispatch({
      type: SET_SCORE,
      payload: data,
    });
  };
};

export const fetchQuestions = (filter) => {
const {type, difficulty} = filter;
  const params = {
    ...filter,
    amount:10
  }
  return async dispatch => {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty ?? ''}&type=${type ?? ''}`)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        dispatch({
          type: SET_QUESTIONS,
          payload: data.results,
        });
      }).catch(err => console.log("Error:", err));
  };
};
export const setStep = (data) => {
  return dispatch => {
    dispatch({
      type: SET_STEP,
      payload: data,
    });
  };
};
export const setSelectedOptions = (data) => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_OPTIONS,
      payload: data,
    });
  };
};
export const setIndex =  (data) => {
  return dispatch => {
    dispatch({
      type: SET_INDEX,
      payload: data,
    });
  };
};
export const clearStore = () => {
  return dispatch => {
    dispatch({
      type: CLEAR
    });
  };
}
