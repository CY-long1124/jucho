import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class showinfoMain extends React.Component{
    render(){
        return(
            <div>
                {/*规则*/}
                {/*vip*/}
                <div className="show-rules">
                    <div className="show-benefit-item">
                        <span className="show-benefit-item__name">VIP+</span>
                        <span className="show-benefit-item__colon">：</span>
                        <div className="plus__desc">
                            V+会员享
                            <span className="plus__desc__benefit">国内免邮 + 双倍积分</span>
                            <span className="plus__desc__arrow">{">"}</span>
                        </div>
                    </div>
                    {/*入场*/}
                    <div className="show-benefit-item">
                        <span className="show-benefit-item__name">入 场</span>
                        <span className="show-benefit-item__colon">：</span>
                        <div className="enter">
                            {"1.1米以上或5周岁以上儿童凭票入场，其他儿童谢绝入场。"}
                        </div>
                    </div>
                    <div className="show-benefit-item">
                        <span className="show-benefit-item__name">支 持</span>
                        <span className="show-benefit-item__colon">：</span>
                        <div className="support__list">
                            <span>在线选座</span><span>|</span>
                            <span>电子票</span><span>|</span>
                            <span>同城满200免邮</span><span>|</span>
                        </div>
                    </div>
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
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(showinfoMain) ;