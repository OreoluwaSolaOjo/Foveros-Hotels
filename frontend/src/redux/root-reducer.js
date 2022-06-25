import { combineReducers } from "redux";
import reducers from './reducer';
import roomloadedreducer from "./roomloadedreducer";

// combined reducers takes all reducers present, in my case i made only one file for reducers
export default combineReducers({
    reducers,
    roomloadedreducer
});