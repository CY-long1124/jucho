import jucooState from '../state/jucoo'
export default function(state=jucooState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    return state;
}