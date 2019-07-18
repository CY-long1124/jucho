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

                 // console.log("showCategoryList",v.category_id);
                 //console.log(6666677777,this.props.showsLibrary[1].show_id)
                //  this.props.showsLibrary.map((w,j)=>{
                //    //console.log(w.show_id.slice(0,2),497)
                //   //  console.log("showsLibrary",w.show_id.substr(0,2));

                //    //console.log(this.props.category,"showsLibrary")
                //    if(v.category_id/1===w.show_id.slice(0,2)/1){
                //       console.log("woaini",this.props.getCategoryList);
                //       this.props.getCategoryList({page:1,category:v.category_id/1});
                     
                //    }
                   
                //  })

                 for(let n=0;n<=this.props.showsLibrary.length-1;n++){
                    //console.log(this.props.showsLibrary[n].show_id)
                  //if(v.category_id/1===this.props.showsLibrary[n].show_id.slice(0,2)/1){
                    //console.log("niaiwo",v.category_id)
                     this.props.getLibraryList({page:4,category:v.category_id/1});
                    //this.props.getLibraryList[n];
                    //console.log("this",this)
                    break;
                 }
                 //}
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