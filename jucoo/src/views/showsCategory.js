import React from 'react';
import {
  connect,
} from 'react-redux'
import {
  bindActionCreators,
} from "redux"
import {withRouter} from "react-router-dom"
import showCategory from "../store/actionCreator/showCategory";


class ShowCate extends React.Component{
  render(){
    return (
      <div id="ShowCate">      
      
<div>
        <ul>
        {
        this.props.showCategoryList.map((v,i)=>{
            return(
                <li key={i}>
                   {v.name}
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
  this.props.getCategoryList(); 

}
}

function mapStateToProps(state){
   
  //console.log("state11111111",state.showCategory);
  return{
    showCategoryList:state.showCategory.showCategoryList,
  }
}

export default connect(mapStateToProps, dispatch=>bindActionCreators(showCategory,dispatch))(withRouter(ShowCate));