import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class ShowinfoRecomend extends React.Component{
    render(){
       return(
           <div className="recommend">
              <div className="recommend__title">相关推荐</div>
               <div className="recommend__list">
                   {/*得到数据遍历item*/}
                   <div className="item">
                       <div className="item__cover">
                           <img className="cover__img img" src="https://image.juooo.com//group1/M00/02/C4/rAoKmV0Ue0SACLrdAABs9_U0sP8432.jpg" alt=""/>
                       </div>
                       <div className="item__info">
                           <div className="item__info__date-week">
                               <span className="item__info__date-week__date">09/06</span>
                               <span className="item__info__date-week__week">周五</span>
                           </div>
                           <div className="item__info__name">
                               <div className="item__info__name__content">
                                   《“鼓动非洲”来自非洲大陆的激情节奏》--陵水
                               </div>
                           </div>
                           <div className="item__info__place">
                               陵水 | 雅居乐海上艺术中心
                           </div>
                            <div className="item__info__price">
                                <span className="item__info__price__num">￥80</span>
                                <span className="item__info__price__text">起</span>
                            </div>
                       </div>
                   </div>
                   <div className="item">
                       <div className="item__cover">
                           <img className="cover__img img" src="https://image.juooo.com//group1/M00/02/C4/rAoKmV0Ue0SACLrdAABs9_U0sP8432.jpg" alt=""/>
                       </div>
                       <div className="item__info">
                           <div className="item__info__date-week">
                               <span className="item__info__date-week__date">09/06</span>
                               <span className="item__info__date-week__week">周五</span>
                           </div>
                           <div className="item__info__name">
                               <div className="item__info__name__content">
                                   《“鼓动非洲”来自非洲大陆的激情节奏》--陵水
                               </div>
                           </div>
                           <div className="item__info__place">
                               陵水 | 雅居乐海上艺术中心
                           </div>
                           <div className="item__info__price">
                               <span className="item__info__price__num">￥80</span>
                               <span className="item__info__price__text">起</span>
                           </div>
                       </div>
                   </div>
                   <div className="item">
                       <div className="item__cover">
                           <img className="cover__img img" src="https://image.juooo.com//group1/M00/02/C4/rAoKmV0Ue0SACLrdAABs9_U0sP8432.jpg" alt=""/>
                       </div>
                       <div className="item__info">
                           <div className="item__info__date-week">
                               <span className="item__info__date-week__date">09/06</span>
                               <span className="item__info__date-week__week">周五</span>
                           </div>
                           <div className="item__info__name">
                               <div className="item__info__name__content">
                                   《“鼓动非洲”来自非洲大陆的激情节奏》--陵水
                               </div>
                           </div>
                           <div className="item__info__place">
                               陵水 | 雅居乐海上艺术中心
                           </div>
                           <div className="item__info__price">
                               <span className="item__info__price__num">￥80</span>
                               <span className="item__info__price__text">起</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="recommend__more">查看更多演出</div>
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
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(ShowinfoRecomend) ;