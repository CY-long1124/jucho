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
                   {/*<img className="brief__primary__bg" src={this.props.showinfoState.static_data?this.props.showinfoState.static_data.pic:""} alt=""/>*/}
                   <img className="brief__primary__bg" src="https://image.juooo.com/group1/M00/03/4E/rAoKNVzs2YSALRTYAABqw2z2T5E740.jpg" alt=""/>
                   <div className="brief__primary__fg">
                       <div className="brief__primary__fg__title">
                           <span className="brief__primary__fg__title__text">演出详情</span>
                           <span className="brief__primary__fg__title__back"> </span>
                           <span className="brief__primary__fg__title__home"> </span>
                           <div className="brief__primary__fg__content">
                               <div className="brief__primary__fg__content__cover">
                                   {/*<img src={this.props.showinfoState.static_data?this.props.showinfoState.static_data.pic:""} alt=""/>*/}
                                   <img src="https://image.juooo.com/group1/M00/03/4E/rAoKNVzs2YSALRTYAABqw2z2T5E740.jpg" alt=""/>
                               </div>
                               <div className="brief__primary__fg__content__info">
                                   <div className="brief__primary__fg__content__info__name">
                                       {/*{this.props.showinfoState.share_data.share_title}*/}
                                       【万有音乐系】宫崎骏2019动漫视听音乐会系列—秋之成长-陵水站
                                   </div>
                                   <div className="brief__primary__fg__content__info__tag-wrapper"> </div>
                                   <div className="brief__primary__fg__content__info__price">￥80-280</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="brief__secondary">

               </div>
           </div>
        )
    }
}
function mapStateToProps(state) {

    // if(state.showinfoReducer.showinfoState.length!==0){
    //     console.log(state.showinfoReducer.showinfoState,"yyy");
    // }
    return{
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(ShowinfoHeader) ;