import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import "../../assets/css/homeHead.css";
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class HomeSwiper extends React.Component{
    render(){
        let arr = [1,2,3,4,5,6,7,8.9,10];
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.homeSwiderList.map((v, i) => {
                            return (
                                <div key={i} className="swiper-slide  home-swiper-slide">
                                    <a href={v.url}>
                                        <img style={{width: "100%", height: "196px"}}
                                             src={v.image_url} alt=""/>
                                    </a>
                                </div>
                            )
                        })
                    }


                    {/*{*/}
                        {/*arr.map((v,i)=>{*/}
                            {/*return(*/}
                                {/*<div key={i} className="swiper-slide  home-swiper-slide">*/}
                                    {/*<a href="https://m.juooo.com/tour/tourshowinfo?sid=35564">*/}
                                        {/*<img style={{width:"100%",height:"196px"}} src="https://image.juooo.com/group1/M00/02/78/rAoKmVzC0nGASNkvAADjjOH_tdk514.jpg" alt=""/>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}

                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getHomeSwiderList();
        let mySwiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
            },
            observer:true,
            observeParents:true,
        });
    }
}
function mapStateToProps(state) {
    console.log(state.showinfoReducer.homeSwiderList,"home");
    return{
        homeSwiderList:state.showinfoReducer.homeSwiderList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(HomeSwiper) ;


