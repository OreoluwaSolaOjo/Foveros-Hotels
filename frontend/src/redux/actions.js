import {
    USER_LOADED_FAIL, USER_LOADED_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL, LOGOUT, PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL, PASSWORD_RESET_CONFIRM_FAIL, PASSWORD_RESET_CONFIRM_SUCCESS,
    SIGNUP_SUCCESS, SIGNUP_FAIL, ACTIVATION_SUCCESS, ACTIVATION_FAIL, ROOM_LOADED_SUCCESS, ROOM_LOADED_FAIL
} from './actionTypes';
import axios from "axios"


export const checkAuthenticated = () => async dispatch => {
    // if access token exists in localStorage
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        // set token to access token
        const body = JSON.stringify({ token: localStorage.getItem('access') });
        try {
            // post to required endpoint from djoser documentation
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config);
            if (res.data.code !== "token_not_valid") {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                })
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        // add access token in headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL,
            })
        }
    }
    else {
        dispatch({
            type: USER_LOADED_FAIL,

        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        // post request taking the config and body and posting to the create user endpoint
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        // after logging in load user
        dispatch(load_user())
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}
export const signup = (firstName, lastName, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ firstName, lastName, email, password, re_password });
    try {
        // post request taking the config and body and posting to the create user endpoint
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
        })
    }
}
export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ uid, token });
    try {
        // post request taking the config and body and posting to the create user endpoint
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);
        dispatch({
            type: ACTIVATION_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL,
        })
    }
}
export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email });
    try {
        // post request taking the config and body and posting to the create user endpoint
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        })
    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
        // post request taking the config and body and posting to the create user endpoint
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}



// Room loading
export const room_load = () => async dispatch => {

    try {
        const rooms = await axios.get(`${process.env.REACT_APP_API_URL}/bookinglogic/get_room_list/`)

        dispatch({
            type: ROOM_LOADED_SUCCESS,
            payload: rooms.data
        })
    } catch (err) {
        dispatch({
            type: ROOM_LOADED_FAIL,
        })
    }
}




