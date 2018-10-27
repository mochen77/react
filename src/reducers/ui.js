import { UI_CHANGE_TITLE, UI_CHANGE_TABBAR, UI_CHANGE_STYLE, UI_TOGGLE_HEADER_BACK } from "../actions/actionType";

const initialState = {
  title: '首页',
  isShowBack: false,
  isTabBarShow: true
}

const ui = (state=initialState,action) => {
    switch(action.type) {
        case UI_CHANGE_TITLE:
          return Object.assign({}, state, {
            title: action.title
          });
        case UI_TOGGLE_HEADER_BACK:
          return Object.assign({}, state, {
            isShowBack: action.isShow
          });
        case UI_CHANGE_STYLE:
          return Object.assign({}, state, action.style)
        // case UI_CHANGE_TITLE:
        //   return Object.assign({}, state, {
        //     title: action.title
        //   })
        case UI_CHANGE_TABBAR:
          console.log(action.show)
          return Object.assign({}, state, {
            isTabBarShow: action.show
          })
        default: 
          return state
      }
}

export default ui;