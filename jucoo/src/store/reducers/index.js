import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
import showinfoReducer from './showinfoReducer'
import theatre from './theatre'
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import classfy from './classfy'
export default combineReducers({
    jucoo,
    showinfoReducer,
    theatre,
    showCategory,
    showsLibrary,
    classfy,
})