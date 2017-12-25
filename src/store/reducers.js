import { combineReducers } from 'redux'
import AppNavBarReducer from './AppNavBar'
import ProjectReducer from './project'

export default combineReducers({
    AppNavBarReducer,
    ProjectReducer
})