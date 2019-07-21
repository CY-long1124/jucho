import React from 'react';
import {
  connect,
} from 'react-redux'
import {
  bindActionCreators,
} from "redux";
import {withRouter} from "react-router-dom";
import tourShowInfoCreator from "../store/actionCreator/tourShowInfo";
class TourShowInfo extends React.Component{
  render(){
    return (
      <div id="TourShowInfo">
      
      {
         <div dangerouslySetInnerHTML={{__html: this.props.tourShowsList}}/>
        //   this.props.tourShowsList.map((v,i)=>{
        //       return(
        //         <div key={i}>
        //                 {v.name}
                     
        //         </div>
        //       )
        // })

        }
      
      </div>
    );
}
componentWillMount(){
 // console.log(11111111,this.props);
  this.props.getTourList({}); 
 //console.log(777777777,this.props)
}
}
function mapStateToProps(state){  
  console.log(12121212,"state",state.tourShowInfo.tourShowsList);
  return{
        tourShowsList:state.tourShowInfo.tourShowsList,
        sid:"",
  }

}


export default connect(mapStateToProps, dispatch=>bindActionCreators(tourShowInfoCreator,dispatch))(withRouter(TourShowInfo));