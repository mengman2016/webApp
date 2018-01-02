import { combineReducers } from 'redux'
import AppNavBarReducer from './AppNavBar'
import ProjectReducer from './project'
import LoginReducer from './LoginIn'

export default combineReducers({
    AppNavBarReducer,
    ProjectReducer,
    LoginReducer
})