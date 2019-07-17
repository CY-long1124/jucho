import showCategoryState from "../state/showCategory";
import showCategroyType from "../actionType/showCategroy";

export default function (state=showCategoryState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    //console.log(payload,999999999999)
    if(type===showCategroyType.GET_SHOWCATEGROY){
        state.showCategoryList = payload.showCategoryList;
        //state.afterShowCategoryList = payload.afterShowCategoryList
        //console.log(state.showCategoryList,11111111111111)
    }
    console.log(state)
    return state;
}