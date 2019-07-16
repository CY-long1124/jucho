import showsLibraryState from '../state/showsLibrary';
import showsLibraryType from "../actionType/showsLibrary";

export default function(state=showsLibraryState,{type,payload}){
    // console.log(state)
    state = JSON.parse(JSON.stringify(state));
    if(type===showsLibraryType.GET_SHOWSLIBRARY){
//console.log(12344,payload.showCategoryList)
        state.showsList = payload.showsList;
    }
    //console.log(7777777777,state)
    return state;
}

