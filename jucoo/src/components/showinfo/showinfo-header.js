import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"

import showinfoCreator from "../../store/actionCreator/showinfoCreator"
// import showinfo from "../../views/showinfo";
class ShowinfoHeader extends React.Component{
    render(){
        return(
           <div>
               {/*头部广告引入*/}
               <div className="brief__primary">
                   <img className="brief__primary__bg" src={this.props.showinfoState.static_data.pic} alt=""/>
                   {/*<img className="brief__primary__bg" src="https://image.juooo.com/group1/M00/03/4E/rAoKNVzs2YSALRTYAABqw2z2T5E740.jpg" alt=""/>*/}
                   <div className="brief__primary__fg">
                       <div className="brief__primary__fg__title">
                           <span className="brief__primary__fg__title__text">演出详情</span>
                           <span className="brief__primary__fg__title__back"> </span>
                           <span className="brief__primary__fg__title__home"> </span>
                           <div className="brief__primary__fg__content">
                               <div className="brief__primary__fg__content__cover">
                                   <img className="img" src={this.props.showinfoState.static_data.pic} alt=""/>
                                   {/*<img className="img" src="https://image.juooo.com/group1/M00/03/4E/rAoKNVzs2YSALRTYAABqw2z2T5E740.jpg" alt=""/>*/}
                               </div>
                               <div className="brief__primary__fg__content__info">
                                   <div className="brief__primary__fg__content__info__name">
                                       {this.props.showinfoState.static_data.show_name}
                                       {/*【万有音乐系】宫崎骏2019动漫视听音乐会系列—秋之成长-陵水站*/}
                                   </div>
                                   <div className="brief__primary__fg__content__info__tag-wrapper"> </div>
                                   <div className="brief__primary__fg__content__info__price">{"￥"+this.props.showinfoState.static_data.price_range}</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               {/*定位*/}
               <div className="brief__secondary">
                    <div className="brief__secondary__info">
                        <div className="brief__secondary__info__date-time">
                            <span>{"08/24"}</span>
                            <span>{"周六"}</span>
                        </div>
                        <div className="brief__secondary__info__place">
                            {this.props.showinfoState.static_data.city.city_name+ "|" +this.props.showinfoState.static_data.venue.venue_name}
                            {/*陵水 | 雅居乐海上艺术中心*/}
                        </div>
                    </div>
                   <div className="brief__secondary__pointer"> </div>
               </div>
               {/*立即办卡*/}
               <div className="detail__plus-tips">
                    <div className="orange-plus-tips">
                        <div className="orange-plus-tips__name">橙PLUS卡</div>
                        <div className="orange-plus-tips__desc">开通送￥100</div>
                        <div className="orange-plus-tips__guide">立即开卡</div>
                        <div className="orange-plus-tips__arrow">{">"}</div>
                    </div>
               </div>
           </div>
        )
    }
}
function mapStateToProps(state) {
        console.log(state.showinfoReducer.showinfoState,"yyy");
        return{
            showinfoState:state.showinfoReducer.showinfoState
        }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(ShowinfoHeader) ;