import {
    combineReducers
} from 'redux'

import hot from './hot'
import jucoo from './jucoo';
import theatre from './theatre'
import showCategory  from "./showCategory";
import showsLibrary from "./showsLibrary";
import showinfoReducer from './showinfoReducer'
import classfy from './classfy'
import tourShowInfo from "./tourShowInfo"
export default combineReducers({
    jucoo,
    showinfoReducer,
    theatre,
    showCategory,
    showsLibrary,
    classfy,
    hot,
    tourShowInfo
})