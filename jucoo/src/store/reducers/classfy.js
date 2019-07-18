import ClassfyState from '../state/jucoo'
export default function(state=ClassfyState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === "GET_CLASSFYLIST"){
        state.classfyList = payload.classfyList
    }
    if(type === "CHANGE_CATEGORY_DATA"){
        state.categoryData = payload.data
    }
    return state;
}