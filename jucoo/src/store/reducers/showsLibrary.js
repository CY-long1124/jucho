import showsLibraryState from '../state/showsLibrary';
import showsLibraryType from "../actionType/showsLibrary";
//jfioefjioepkfoip
export default function(state=showsLibraryState,{type,payload}){
     //console.log(5555555555,payload)
    state = JSON.parse(JSON.stringify(state));
    if(type===showsLibraryType.GET_SHOWSLIBRARY){
        state.showsList = payload.showsList;
        state.category = payload.category;
        state.page = payload.page;
        //console.log(9999999,state)
    }
    return state;
}

