import { combineReducers } from "redux";
import jokeReducer from "./jokeReducers";

const rootReducer = combineReducers({  
    joke: jokeReducer,
});

export default rootReducer;