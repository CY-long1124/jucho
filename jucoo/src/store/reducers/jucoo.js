import jucooState from '../state/jucoo'
import jucooType from "../actionType/jucoo"
export default function(state=jucooState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===jucooType.GET_SHOWINFO){
        state.showinfo = payload.data;
    }
    return state;
}