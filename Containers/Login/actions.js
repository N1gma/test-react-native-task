import { loginAccounts } from '../../static/mock_data';

import {
    INPUT_CHANGED,
    AUTH_ERROR,
    VALIDATION_ERROR,
    LOGIN_SUBMITTED,
    LOG_OUT
} from './reducer';

export function inputChanged(field, value) {
    return {
        type: INPUT_CHANGED,
        field,
        value
    }
}

export function loginSubmitted(validationData) {
    return ( dispatch, getState ) => {
        if (validationData.valid) {
            const { login, password } = getState().loginReducer;
            if (loginAccounts[login] === password) {
                return dispatch({
                    type: LOGIN_SUBMITTED
                })
            } else {
                return dispatch({
                    type: AUTH_ERROR
                })
            }
        } else {
            return dispatch({
                type: VALIDATION_ERROR,
                errors: validationData.errorObjects
            })
        }
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}