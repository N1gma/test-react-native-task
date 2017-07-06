import {
    SCREEN_CHANGED
} from './commonReducer';

export function layoutChanged(window) {
    return {
        type: SCREEN_CHANGED,
        window: {
            ...window,
            orientation: window.width > window.height ? 'LANDSCAPE' : 'PORTRAIT'
        }
}
}