import jucooState from '../state/jucoo'
import showinfoType from "../actionType/showinfoType"
export default function(state=jucooState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===showinfoType.GET_SHOWINFO){
        state.showinfoState = payload.data;
    }
    return state;
}