import React from 'react';
import '../../assets/css/tourBlock.css'
import '../../assets/css/categoryBlock.css'
import {
    connect
} from 'react-redux'
import axios from 'axios'
class HotBlock extends React.Component{
    render(){
        return (
            <div className="hot-block">
                <div className="hot-block-t">
                    <h3>热门演出</h3>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                </div>
                <ul className="row-bg-q-box">
                    {
                        this.props.hotList.map((v,i)=>{
                            return (
                                <li className="row-bg-r-img" key={i}>
                                    <div>
                                        <img src={v.pic}/>
                                    </div>
                                    <p className="ovv">{v.show_name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentWillMount(){
        this.props.getHotList();
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        hotList : state.hot.hotList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHotList(){
            dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getHotsRecommendList?city_id=0&version=6.0.1&referer=2").then(({data})=>{
                    // console.log(data.data.hots_show_list.slice(0,10))
                    const hotList = data.data.hots_show_list.slice(0,10);
                    dispatch({
                        type:"GET_HOT_LIST",
                        payload:{
                            hotList,
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HotBlock);