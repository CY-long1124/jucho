import {
    combineReducers
} from 'redux'


import jucoo from './jucoo';
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";

export default combineReducers({
    jucoo,
    showCategory,
    showsLibrary
})