import  { combineReducers } from 'redux'
import activityReducer from './activity'

export default combineReducers({activities: activityReducer})