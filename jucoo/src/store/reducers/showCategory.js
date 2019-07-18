import showCategoryState from "../state/showCategory";
import showCategroyType from "../actionType/showCategroy";

export default function (state=showCategoryState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    //console.log(payload,999999999999)
    if(type===showCategroyType.GET_SHOWCATEGROY){
        state.showCategoryList = payload.showCategoryList;
        state.category = payload.category;
        state.page = payload.page;
    }
    //console.log(state)
    return state;
}