
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/sessions_actions";

const _nullSession = {
    currentUser: null 
};

const SessionReducer = (state = _nullSession, action) => {
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user}; 
        case LOGOUT_CURRENT_USER: 
            return _nullSession; 
        default:
            return state;
    }
};

export default SessionReducer; 