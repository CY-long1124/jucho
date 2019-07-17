import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
import theatre from './theatre'
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import showinfoReducer from './showinfoReducer'
import classfy from './classfy'
export default combineReducers({
    jucoo,
    showinfoReducer,
    theatre,
    showCategory,
    showsLibrary,
    classfy,
})