import { combineReducers } from "redux";
import reducer from './Reducers_register'
import login_reducer from "./Reducer_login";
const reducers=combineReducers({
    user_func:reducer,
    login_id:login_reducer
})
export default reducers