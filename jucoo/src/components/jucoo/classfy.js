import React from 'react';
import {
    withRouter
} from 'react-router-dom'
import axios from 'axios'
import {
    connect
} from 'react-redux'
import '../../assets/css/classfy.css'
class Classfy extends React.Component{
    render(){
        return(
            <div className="classfy">
                {
                    this.props.classfyList.map((v,i)=>{
                        return (
                            <div key={i} onClick={()=>{
                                this.props.history.push("/showsLibrary/0/"+v.category_id)
                            }
                            }>
                                <img src={v.pic} alt=""/>
                                <span>{v.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        this.props.getClassFyList();
    }
    
}
const mapStateToProps = (state) => {
    // console.log(state.classfy.classfyList)
    return {
       classfyList : state.classfy.classfyList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getClassFyList(){
            dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.1&referer=2").then(({data})=>{
                    // console.log(data.data.classify_list);
                    dispatch({
                        type:"GET_CLASSFYLIST",
                        payload:{
                            classfyList : data.data.classify_list,
                        }
                    })
                })
            })
           
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Classfy));