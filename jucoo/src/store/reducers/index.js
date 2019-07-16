import {
    combineReducers
} from 'redux'
import jucoo from './jucoo';
import showinfoReducer from './showinfoReducer'
import theatre from './theatre'
export default combineReducers({
    jucoo,
    showinfoReducer,
	theatre
})