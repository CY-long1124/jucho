import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class ShowinfoRecomend extends React.Component{
    render(){
       return(
           <div>
               reco
           </div>
       )
    }
}
function mapStateToProps(state) {

    // if(state.showinfoReducer.showinfoState.length!==0){
    //     console.log(state.showinfoReducer.showinfoState,"yyy");
    // }
    return{
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(ShowinfoRecomend) ;