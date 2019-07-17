import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import showinfoReducer from './showinfoReducer'
import classfy from './classfy'

export default combineReducers({
    jucoo,
    showCategory,
    showsLibrary,
    showinfoReducer,
    classfy,
})