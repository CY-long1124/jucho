import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import classfy from './classfy'

export default combineReducers({
    jucoo,
    showCategory,
    showsLibrary,
    classfy
})