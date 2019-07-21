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
                <li key={i} onClick={()=>{

               
                 for(let n=0;n<=this.props.showsLibrary.length-1;n++){
                  
                     this.props.getLibraryList({page:4,category:v.category_id/1});
                  
                    break;
                 }
                }}>
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
  this.props.getCategoryList({}); 
}
componentDidMount(){
  //console.log(this.props.showCategoryList,515115)
}
}

function mapStateToProps(state){
  //console.log("state112121212",state.showsLibrary.showsList);
 // console.log("state11111111",state.showCategory.showCategoryList);
  return{
    showCategoryList:state.showCategory.showCategoryList,
    showsLibrary:state.showsLibrary.showsList,
    category:state.showCategory.category,
    page:state.showCategory.page
  }
}

export default connect(mapStateToProps, dispatch=>bindActionCreators(showCategory,dispatch))(withRouter(ShowCate));