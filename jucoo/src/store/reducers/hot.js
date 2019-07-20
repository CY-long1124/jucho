import hotState from '../state/hot';
export default function(state=hotState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === "GET_HOT_LIST"){
        state.hotList = payload.hotList
    }
    if(type === "GET_TOUR_LIST"){
        state.hotTourList = payload.hotTourList
    }
    if(type === "GET_HOT_THEATRE_LIST"){
        state.hotTheatreList = payload.hotTheatreList
    }
    if(type === "GET_LOADING_LIST"){
        state.LoadingList = payload.LoadingList
    }
    return state;
}