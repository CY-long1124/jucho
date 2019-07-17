import React from 'react';
import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../store/actionCreator/showinfoCreator"
import ShowinfoHeader from "../components/showinfo/showinfo-header"
import ShowinfoMain from "../components/showinfo/showinfo-main"
import ShowinfoTour from "../components/showinfo/showinfo-tour"
import ShowinfoRecommend from "../components/showinfo/shoeinfo-recommend"
class Showinfo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="detail">
                {/*头部信息*/}
                <ShowinfoHeader/>
                {/*描述区*/}
                <ShowinfoMain/>
                {/*巡演城市*/}
                <ShowinfoTour/>
                {/*相关推荐*/}
                <ShowinfoRecommend/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props,"444")
        this.props.getShowInfo();
    }
}
function mapStateToProps(state) {
    // console.log(state.showinfoReducer.showinfoState,"yyy");
    return{
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(Showinfo) ;