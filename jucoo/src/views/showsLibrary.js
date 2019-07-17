import React from 'react';
import {
  connect,
} from 'react-redux'
import {
  bindActionCreators,
} from "redux"
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
// } from "react-router-dom"
import {withRouter} from "react-Router"
import showsLibraryCreator from "../store/actionCreator/showsLibrary";
import ShowCate from "./showsCategory"
import '../assets/css/showsLibrary.css'
class Show extends React.Component{
  render(){
    return (
      <div id="ShowsLibrary">
      
<div>
  
        <ul>
          
          <ShowCate></ShowCate>
          <li onClick={()=>{
          }}></li>
        </ul>
      
        <ul>
        {
        this.props.showsList.map((v,i)=>{
            return(
                <li key={i}>
                    <div>
                        <img src={v.pic} />
                    </div>
                    <div>
                        <p>{v.show_time_top}</p>
                        <h3>{v.name}</h3>
                        <p>{v.city_name}</p>
                        <p>{v.min_price}起</p>
                    </div>
                </li>
            )
        })
        }  
        </ul>

      </div>
      </div>
    );
}
componentWillMount(){
  this.props.getLibraryList({}); 
  //this.props.getCategoryList();
}
}

function mapStateToProps(state){
   
  //console.log("state",state.showsLibrary.showsList);
  return{
    showsList:state.showsLibrary.showsList,
  }
}

export default connect(mapStateToProps, dispatch=>bindActionCreators(showsLibraryCreator,dispatch))(withRouter(Show));