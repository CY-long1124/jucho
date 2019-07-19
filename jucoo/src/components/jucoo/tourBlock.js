import React from 'react';
import '../../assets/css/hotBlock.css'
import axios from 'axios'
import {
    connect
} from 'react-redux'
import { stat } from 'fs';
class TourBlock extends React.Component{
    render(){
        return (
            <div className="hot-block">
                <div className="hot-block-t">
                    <h3>巡回演出</h3>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                </div>
                <ul>
                    {
                        // [1,2,3,4,5,6].map((v,i)=>{
                        //     return (
                        //         <li>
                                   
                        //         </li>
                        //     )
                        // })
                    }
                </ul>
            </div>
        )
    }
    componentWillMount(){
        // this.props.getTourList();
        // console.log(this.props.hotTourList)
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        hotTourList : state.hot.hotTourList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTourList(){
            dispatch((dispatch)=>{
                axios.get("/jucoo/home/index/getTourRecommendList?city_id=0&version=6.0.1&referer=2").then(({data})=>{
                    // console.log(data.data.tour_show_list.slice(0,6));
                    const hotTourList = data.data.tour_show_list.slice(0,6);
                    dispatch({
                        type:"GET_TOUR_LIST",
                        payload:{
                            hotTourList
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TourBlock);