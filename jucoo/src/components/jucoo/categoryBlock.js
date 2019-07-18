import React from 'react';
import axios from 'axios';
import {
    connect
} from 'react-redux'
import '../../assets/css/categoryBlock.css'
class CategoryBlock extends React.Component{
    constructor(){
        super();
        this.state={
            list:[{a:[1,2,3,4,5,6]},{a:[1,2,3,4,5,6]},{a:[1,2,3,4,5,6]},{a:[1,2,3,4,5,6]},{a:[1,2,3,4,5,6]},{a:[1,2,3,4,5,6]}],
        }
    }
    render(){
        return (
            <div className="category-block">
                {
                    this.props.categoryData.map((v,i)=>{
                        return (
                            <div key={i} className="cate-block">
                                <div className="cate-block-title">
                                    <h3 className="cate-block-title-name">{v.title}</h3>
                                    <img className="cate-block-title-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                                </div>
                                <div className="category-block__list__row">
                                    <div className="row-bg">
                                        <div className="row-bg-l">
                                            <img src={v.list[0].pic} alt=""/>
                                        </div>
                                        <div className="row-bg-r">
                                            <p className="row-bg-r-p">
                                                <strong>{v.list[0].date}</strong>
                                                <span>{v.list[0].week}</span>
                                            </p>
                                            <h3 className="ovvv">{v.list[0].schedular_name}</h3>
                                            <p className="row-bg-r-pn">{v.list[0].venue_name}</p>
                                        </div>
                                    </div>
                                </div>
                               { <ul className="row-bg-r-box">
                                    {
                                        v.list.slice(1,v.list.length).map((v,i)=>{
                                            return (
                                                <li className="row-bg-r-img" key={i}>
                                                    <div>
                                                        <img src={v.pic}/>
                                                    </div>
                                                    <p className="ovv">{v.schedular_name}</p>
                                                    <p>￥{v.low_price}<span>&nbsp;起</span></p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        this.props.getCategoryData();
        // console.log(1111111111111,this.props.categoryData);
    }
}
const mapStateToProps = (state) => {
    // console.log(22222222,state)
    return {
        categoryData : state.classfy.categoryData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       getCategoryData(){
            dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getFloorShow?city_id=0&version=6.0.1&referer=2").then(({data})=>{
                    // console.log(777777777,data);
                    dispatch({
                        type:"CHANGE_CATEGORY_DATA",
                        payload:data
                    })
                })
            })
       } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryBlock);