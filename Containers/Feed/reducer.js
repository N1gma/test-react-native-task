export const SET_NEWS = 'SET_NEWS';


const defaultState = {
    feed: []
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                feed: action.feed
            }
        }
        default:
            return state
    }
}