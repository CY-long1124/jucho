import {
    combineReducers
} from 'redux'
import jucoo from './jucoo';
import showinfoReducer from './showinfoReducer'
export default combineReducers({
    jucoo,
    showinfoReducer
})