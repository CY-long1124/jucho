import React from 'react';
import {
  connect,
} from 'react-redux'
import {
  bindActionCreators,
} from "redux";
import {withRouter} from "react-router-dom";
import showsLibraryCreator from "../store/actionCreator/showsLibrary";
import ShowCate from "./showsCategory";
import '../assets/css/showsLibrary.css';
class Show extends React.Component{
  render(){
    return (
      <div id="ShowsLibrary">
      
<div>
  
        <ul>
          
          <ShowCate getLibraryList={this.props.getLibraryList.bind(this.props)}></ShowCate>
          <li onClick={()=>{
           // console.log(66666)
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
  console.log(this.props)
}
}

function mapStateToProps(state){  
  //console.log("state",state.showsLibrary.showsList);
  return{
    showsList:state.showsLibrary.showsList,
    category:state.showsLibrary.category,
    page:state.showsLibrary.page
  }

}

export default connect(mapStateToProps, dispatch=>bindActionCreators(showsLibraryCreator,dispatch))(withRouter(Show));