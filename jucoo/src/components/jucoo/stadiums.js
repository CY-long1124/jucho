import React from 'react';
import axios from 'axios';
import {
    connect
} from 'react-redux'
import {
    withRouter
} from 'react-router-dom'
import "../../assets/css/stadiums.css"
class Stadiums extends React.Component{
    render(){
        return (
            <div className="stadiums">
                <div className="sta-title">
                    <h3>热门场馆</h3>
                    <img onClick={()=>{
                        this.props.history.push("/theatre");
                    }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                </div>
                <ul className="sta-list">
                    {
                        this.props.hotTheatreList.map((v,i)=>{
                            return (
                                <li className="sta-list-li" key={i} onClick={()=>{
                                    this.props.history.push("/theatreStyleCenter/" + v.id)
                                }}>
                                    <div className="li-Box">
                                        <div className="li-Box-l">
                                            <img src={v.pic} alt=""/>
                                        </div>
                                        <div className="li-Box-c">
                                            <h3>{v.name}</h3>
                                            <p>{v.count}场在售演出</p>
                                        </div>
                                        <span onClick={()=>{
                                            this.props.history.push("/theatreStyleCenter/" + v.id)
                                        }} className="iconfont li-Box-r">&#xe63b;</span>
                                    </div>
                                    <div className="date-li">
                                        <p>
                                            <span>{v.showList[0].show_time}</span>
                                            <span></span>
                                        </p>
                                        <p>
                                            <span>{v.showList[1].show_time}</span>
                                            <span></span>
                                        </p>
                                    </div>
                                    <ul className="sta-pic">
                                        <li>
                                            <img src={v.showList[0].pic} alt=""/>
                                        </li>
                                        <li>
                                            <img src={v.showList[1].pic} alt=""/>
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillMount(){
        this.props.getHotTheatreList()
    }
}
const mapStateToProps = (state) => {
    // console.log(state.hot.hotTheatreList);
    return {
        hotTheatreList : state.hot.hotTheatreList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       getHotTheatreList(){
           dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getHotTheatre?version=6.0.1&referer=2").then(({data})=>{
                    // console.log(data.data.theatre_list);
                    const hotTheatreList = data.data.theatre_list;
                    dispatch({
                        type : "GET_HOT_THEATRE_LIST",
                        payload:{
                            hotTheatreList
                        }
                    })
                })
           })
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Stadiums));