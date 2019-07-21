import tourShowInfoState from '../state/tourShowInfo';

export default function(state=tourShowInfoState,{type,payload}){
    //  console.log(5555555555,payload)
    state = JSON.parse(JSON.stringify(state));
    //console.log(11199999,state)
    if(type==="GET_TOURSHOWINFO"){
        state.tourShowsList = payload.tourShowsList;
        state.sid = payload.sid;
        //console.log(9999999,state.tourShowsList)
    }
    return state;
}

