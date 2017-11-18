import { signup, login, logout } from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER, 
    user 
}); 

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
}); 


export const Signup = formUser => dispatch => (
    signup(formUser).then(user=> dispatch(receiveCurrentUser(user)))
);

export const Login = formUser => dispatch => (
    Login(formUser).then(user => dispatch(receiveCurrentUser(user)))
);

export const Logout = () => dispatch => (
    logout().then(() => dispatch(logoutCurrentUser()))
);



