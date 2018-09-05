import {combineReducers} from 'redux'
import category from './categoryReducer'
import home from './homeReducer'
import login from './loginAndLogoutReducer'
const rootReducer = combineReducers({
    category, home, login
})

export default rootReducer