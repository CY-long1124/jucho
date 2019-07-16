import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
<<<<<<< HEAD
import showinfoReducer from './showinfoReducer'
import theatre from './theatre'
export default combineReducers({
    jucoo,
    showinfoReducer,
	theatre
=======
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import classfy from './classfy'

export default combineReducers({
    jucoo,
    showCategory,
    showsLibrary,
    classfy
>>>>>>> 52f97760a698c0c4c478060389ae520d9db76d0e
})