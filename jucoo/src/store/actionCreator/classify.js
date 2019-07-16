import axios from "axios";
import {
    bindActionCreators,
  } from "redux"
import {
    BrowserRouter as Router,
   
    Link
  } from "react-router-dom"
  import React from "react"
export default{
        UpClassify(payload){
        return{
            type:"UP_CLASSIFY",
            payload
        }
    },
    getClassifyList(){
        return((dispatch)=>{
            axios.get("/juco/home/getClassifyItem?operation_limit=10")
            .then(({data})=>{
               //console.log(2222222222,data)
                const classifyList = data.data.classify_list;
                //console.log(33333333322222222222,classifyList)
                dispatch(this.UpClassify({
                    classifyList,
                }))
                console.log(111111111111000000,classifyList)    
        })
        })
       
  },
  toShowsLibrary(){
      console.log(111)
      return(
      <Link to="/showsLibrary">
            </Link>
      )
    // this.props.history.push({
    //     pathName:"showsLibrary",
    //     state:{
    //         a:2
    //     }
    // })
}
}