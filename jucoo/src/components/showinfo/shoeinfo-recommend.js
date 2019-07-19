import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import {withRouter} from "react-router-dom";
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class ShowinfoRecomend extends React.Component{
    render(){
        if(this.props.showinfoList.length!==0){
            // console.log(this.props.showinfoList.list,"rrr666");
            // const showList = this.props.showinfoList.list.splice(1,3);
            // console.log(showList);
            return(
                <div className="recommend">
                    <div className="recommend__title">相关推荐</div>
                    <div className="recommend__list">
                        {/*得到数据遍历item*/}
                        {
                            this.props.showinfoList.list.slice(1,4).map((v,i)=>{
                                return(
                                    <div className="item">
                                        <div className="item__cover">
                                            <img className="cover__img img" src={v.pic} alt=""/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__info__date-week">
                                                <span className="item__info__date-week__date">09/06</span>
                                                <span className="item__info__date-week__week">周五</span>
                                            </div>
                                            <div className="item__info__name">
                                                <div className="item__info__name__content">
                                                    {v.name}
                                                </div>
                                            </div>
                                            <div className="item__info__place">
                                                {v.city_name + "" +v.venue_name }
                                            </div>
                                            <div className="item__info__price">
                                                <span className="item__info__price__num">￥80</span>
                                                <span className="item__info__price__text">起</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/*https://m.juooo.com/Search/getShowList?category=36&city_id=10055&page=1*/}
                    <div className="recommend__more" onClick={()=>{
                        // console.log(this.props.showinfoState.static_data.cate_parent_id,this.props.showinfoState.static_data.city.city_id,"showinfo");
                        this.props.history.push(`/showsLibrary/${this.props.showinfoState.static_data.cate_parent_id}/${this.props.showinfoState.static_data.city.city_id}`)
                    }} >查看更多演出</div>
                </div>
            )
        }else {
            return false
        }

    }
    componentDidMount(){
        // console.log(this.props.showinfoState.static_data.cate_parent_id,this.props.showinfoState.static_data.city.city_id,"showinfo");
        let category = this.props.showinfoState.static_data.cate_parent_id;
        let showListId = this.props.showinfoState.static_data.city.city_id;
        this.props.getShowinfoList(category,showListId);
        // this.props.getShowInfo();
    }
}
function mapStateToProps(state) {
    return{
        showinfoList:state.showinfoReducer.showinfoList,
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(withRouter(ShowinfoRecomend)) ;