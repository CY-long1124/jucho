import {
    combineReducers
} from 'redux'
import jucoo from './jucoo';
import showinfoReducer from './showinfoReducer'
import classfy from './classfy'
export default combineReducers({
    jucoo,
    showinfoReducer,
    classfy
})