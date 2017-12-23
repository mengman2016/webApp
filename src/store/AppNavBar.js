/**
 * 给底部导航栏提供参数，显示消息
 * */

export default function AppNavBarReducer(state={}, action) {
    switch (action.type) {
        case 'PRESS_ON_MESSAGE':
            return {...state, navBarMessage: Object.assign({}, action.navBarMessage)}
        default:
            return state
    }
}