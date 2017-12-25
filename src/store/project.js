/**
 * project的相关信息
 * */

export default function ProjectReducer(state={}, action) {
    switch (action.type) {
        case 'SELECT_PROJECT':
            return {...state, project : Object.assign({}, action.project)}
        default:
            return state
    }
}