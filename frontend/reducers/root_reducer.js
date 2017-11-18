
import session from "./session_reducer";
import errors from "./errors_reducer";
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    session,
    errors
}); 

export default RootReducer; 

