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
                    this.state.list.map((v,i)=>{
                        return (
                            <div key={i} className="cate-block">
                                <div className="cate-block-title">
                                    <h3 className="cate-block-title-name">演唱会</h3>
                                    <img className="cate-block-title-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                                </div>
                                <div className="category-block__list__row">
                                    <div className="row-bg">
                                        <div className="row-bg-l">
                                            <img src="https://image.juooo.com//group1/M00/02/C1/rAoKmV0Qo1yAEj4nAABDfwl0uDY969.jpg" alt=""/>
                                        </div>
                                        <div className="row-bg-r">
                                            <p className="row-bg-r-p">
                                                <strong>08/16</strong>
                                                <span>周五</span>
                                            </p>
                                            <h3>西城男孩20周年世界巡回演唱会 上海站</h3>
                                            <p className="row-bg-r-pn">上海  |  国家会展中心（上海）虹馆EH</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        // this.props.getCategoryData();
        // console.log(1111111111111,this.props);
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