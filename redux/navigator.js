import { StackNavigator, NavigationActions } from 'react-navigation';
import Login from '../Containers/Login';
import Feed from '../Containers/Feed';

import { LOGIN_SUBMITTED, LOG_OUT } from '../Containers/Login/reducer';

export const AppNavigator = StackNavigator({
    Login: { screen: Login },
    Feed: { screen: Feed }
});

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Login')
);

export default function navReducer (state = initialState, action) {
    let nextState;
    switch (action.type) {
        case LOGIN_SUBMITTED: {
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Feed'})
                    ]
                }),
                state
            );
            break;
        }
        case LOG_OUT: {
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login'})
                    ]
                }),
                state
            );
            break;
        }
        default: {
            nextState = AppNavigator.router.getStateForAction(action, state);
        }
    }

    return nextState || state;
}