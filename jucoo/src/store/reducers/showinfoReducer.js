import showinfoState from "../state/showinfoState"
import showinfoType from "../actionType/showinfoType"
export default function(state=showinfoState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===showinfoType.GET_SHOWINFO){
        state.showinfoState = payload.data;
    }
    if(type===showinfoType.GET_SHOWINFOTOURCITY){
        state.showinfoTourCity = payload.data;
    }
    if(type===showinfoType.GET_SHOWINFOLIST){
        state.showinfoList = payload.data;
    }
    return state;
}