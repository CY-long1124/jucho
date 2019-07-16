import React from 'react';
import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../store/actionCreator/showinfoCreator"
class Showinfo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                {/*头部广告引入*/}
                <div className="brief__primary">

                </div>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props,"444")
        this.props.getShowInfo();
    }
}
function mapStateToProps(state) {
    console.log(state.showinfoReducer.showinfoState,"yyy");
    return{
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(Showinfo) ;