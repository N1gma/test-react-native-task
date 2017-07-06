export const INPUT_CHANGED = 'INPUT_CHANGED';
export const LOGIN_SUBMITTED = 'LOGIN_SUBMITTED';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const VALIDATION_ERROR = 'VALIDATION_ERROR';

const defaultState = {
    login: '',
    password: '',
    isLoggedIn: false,
    validationErrors: {},
    authErrors: {}
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case INPUT_CHANGED: {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                password: '',
                validationErrors: {},
                authErrors: {
                    Auth: 'invalid login/password'
                }
            }
        }
        case VALIDATION_ERROR: {
            return {
                ...state,
                authErrors: {},
                validationErrors: action.errors
            }
        }
        case LOGIN_SUBMITTED: {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        default:
            return state
    }
}