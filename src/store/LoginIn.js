/**
 * 登录
 * state结构
 * {
 *  ...
 *  userInfo: {
 *      phone,
 *      token
 *  }
 * }
 * */

export default function LoginReducer(state={}, action) {
    switch (action.type) {
        case 'LOGIN_IN':
            return {...state, userInfo : Object.assign({}, action.userInfo)}
        case 'LOGIN_OUT':
            return {...state, userInfo: {}}
        default:
            return state
    }
}