import React from 'react';
import '../../assets/css/homeHead.css'
import {
    withRouter
} from 'react-router-dom'
class HomeHead extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="homeHead">
                <div className="pic-icon">
                    <i className="iconfont">&#xe611;</i>
                    <span>全国</span>
                </div>
                <div className="search" onClick={()=>{
                    this.props.history.push("/search")
                }}>
                    <span className="iconfont">&#xe614;</span>
                    <span>搜索热门演出</span>
                </div>
                <div className="headPic">
                    <img src="https://image.juooo.com//group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default withRouter(HomeHead);