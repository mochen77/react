import { UI_CHANGE_TITLE, UI_CHANGE_TABBAR,UI_CHANGE_STYLE, UI_TOGGLE_HEADER_BACK } from './actionType';

export const uiChangeStyle = (style) => {
    return {
        type: UI_CHANGE_STYLE,
        style
    }
}

export const uiChangeTitle = (title) => {
    return {
        type: UI_CHANGE_TITLE,
        title
    }
}


export const uiChangeTabBar = (show) => {
    return {
        type: UI_CHANGE_TABBAR,
        show
    }
}

export const uiToggleHeaderBack = (isShow = false) => {
    return {
        type: UI_TOGGLE_HEADER_BACK,
        isShow
    }
}
