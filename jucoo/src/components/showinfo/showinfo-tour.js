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

class ShowinfoTour extends React.Component {
    render() {
        if (this.props.showinfoTourCity.length !== 0 && this.props.showinfoState.static_data) {
            // console.log(this.props.showinfoState.static_data,"000");
            const cityLIst = this.props.showinfoTourCity.tour_list;
            const showId = this.props.showinfoState.static_data.show_id;
            // console.log(showId,"444")
            return (
                <div>
                    <div className="tour-cities">
                        {/*巡演城市*/}
                        <div className="tour-cities__desc">
                            <span className="tour-cities__desc__title">巡演城市</span>
                            <span onClick={()=>{
                                // this.props.history.push("/tourshowinfo/"+showId)
                                this.props.history.push("/tourshowinfo")
                            }}>
                           <span className="tour-cities__desc__count__num">{this.props.showinfoTourCity.show_total}</span>
                           <span className="tour-cities__desc__count__arrow">{"场"}</span>
                           <span className="tour-cities__desc__count__arrow">{">"}</span>
                   </span>
                        </div>
                        <div className="tour-cities__list">
                            <div className="tour-cities__list__content">
                                {
                                    cityLIst.map((v, i) => {
                                        return (
                                            <div className="tour-cities__list__content__item" key={v.id}>
                                                <div className="tour-cities__list__content__item__city">{v.city_name}</div>
                                                <div className="tour-cities__list__content__item__date">{v.show_time}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*演出介绍*/}
                    <div className="intro">
                        <div className="intro__title">演出介绍</div>
                        <div className="intro__content">
                            <div dangerouslySetInnerHTML={{__html: this.props.showinfoState.static_data.show_desc.desc}}/>
                        </div>
                        <div className="intro__mask" onClick={() => {
                            document.querySelector(".intro").style.height = "auto";
                            document.querySelector(".intro__mask").style.display = "none";
                            document.querySelector(".intro__more").style.display = "none"
                        }}>展示全部
                        </div>
                        <div className="intro__more"/>
                    </div>
                    {/*温馨提示*/}
                    <div className="tips">
                        <div className="tips__title">
                            <span>{"温馨提醒"}</span>
                            <span>{">"}</span>
                        </div>
                        <div className="tips__list">
                            <span>{"快递说明"}</span>
                            <span>{"订票说明"}</span>
                            <span>{"确认订单"}</span>
                            <span>{"购票提醒"}</span>
                        </div>
                    </div>
                </div>

            )
        } else {
            return false
        }

    }

    componentWillMount() {
        // console.log(this.props.showinfoState.static_data.show_id,"showinfo");

        this.props.getShowInfoTourCity(this.props.showinfoState.static_data.show_id);
        // this.props.getShowInfo();
    }
}

function mapStateToProps(state) {

    // if(state.showinfoReducer.showinfoState.length!==0){
    //     console.log(state.showinfoReducer.showinfoState,"yyy");
    // }
    return {
        showinfoTourCity: state.showinfoReducer.showinfoTourCity,
        showinfoState: state.showinfoReducer.showinfoState
    }
}

export default connect(mapStateToProps, dispatch => bindActionCreators(showinfoCreator, dispatch))(withRouter(ShowinfoTour));