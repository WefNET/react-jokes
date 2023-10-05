import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

// action defs
export const fetchJokeRequest = () => ({
  type: FETCH_JOKE_REQUEST,
});

export const fetchJokeSuccess = (joke: any) => ({
  type: FETCH_JOKE_SUCCESS,
  payload: joke,
});

export const fetchJokeFailure = (error: any) => ({
  type: FETCH_JOKE_FAILURE,
  payload: error,
});

// Thunk to fetch a joke
export const fetchJoke = () => {
    return (dispatch: Dispatch) => {
      dispatch(fetchJokeRequest());
  
      axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
          const joke = response.data;
          dispatch(fetchJokeSuccess(joke));
        })
        .catch((error) => {
          dispatch(fetchJokeFailure(error.message));
        });
    };
  };
