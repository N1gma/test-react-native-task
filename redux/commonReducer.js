export const SCREEN_CHANGED = 'SCREEN_CHANGED';

const initialState = {
    window: {}
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case SCREEN_CHANGED: {
            return {
                ...state,
                window: action.window
            }
        }
        default: {
            return state;
        }
    }
}