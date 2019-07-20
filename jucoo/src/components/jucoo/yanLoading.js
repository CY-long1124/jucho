import React from 'react';
import "../../assets/css/stadiums.css"
import axios from 'axios'
import {
    connect
} from 'react-redux'
import {
    withRouter
} from "react-router-dom"
import '../../assets/css/showinfo.css'
class YanLoading extends React.Component{
    render(){
        return (
            <div className="YanLoading">
                <div className="sta-title">
                    <h3>热门场馆</h3>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                </div>
                <div className="recommend__list">
                    {
                        this.props.LoadingList.map((v,i)=>{
                            return (
                                <div className="item" key={i} onClick={()=>{
                                    this.props.history.push("/showinfo/"+ v.sche_id)
                                }}>
                                    
                                    <div className="item__cover">
                                        <img className="cover__img img" src={v.schePic} alt=""/>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">{v.show_time}</span>
                                            <span className="item__info__date-week__week">{v.week}</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div className="item__info__name__content">
                                                {v.show_name}
                                            </div>
                                        </div>
                                        <div className="item__info__place">
                                            {v.c_name} |{v.v_name }
                                        </div>
                                        <div className="item__info__price">
                                            <span className="item__info__price__num">{v.low_price}</span>
                                            <span className="item__info__price__text">起</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentWillMount(){
        this.props.getLoadingList();
        // console.log(this.props.LoadingList)
    }
}
const mapStateToProps = (state) => {
    // console.log(111111,state.hot.LoadingList);
    return {
        LoadingList : state.hot.LoadingList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLoadingList(){
            dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.1&referer=2").then(({data})=>{
                    // console.log(data.data.recommend_show_list);
                    const LoadingList = data.data.recommend_show_list;
                    dispatch({
                        type:"GET_LOADING_LIST",
                        payload:{
                            LoadingList,
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(YanLoading));