import {
    FETCH_JOKE_REQUEST,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE,
  } from '../actions/jokeActions';
  
  const initialState = {
    joke: {},
    loading: false,
    error: null,
  };
  
  const jokeReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case FETCH_JOKE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_JOKE_SUCCESS:
        return {
          ...state,
          joke: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_JOKE_FAILURE:
        return {
          ...state,
          joke: {},
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jokeReducer;
  