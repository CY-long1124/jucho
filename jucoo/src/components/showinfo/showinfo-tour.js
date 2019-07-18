import React from 'react';
// import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import showinfoCreator from "../../store/actionCreator/showinfoCreator"
class ShowinfoTour extends React.Component{
    render(){
        if(this.props.showinfoTourCity.length!==0){
            console.log(this.props.showinfoTourCity,"000tour");
            return(
                <div>
                    <div className="tour-cities">
                        {/*巡演城市*/}
                        <div className="tour-cities__desc">
                            <span className="tour-cities__desc__title">巡演城市</span>
                            <span>
                       <span className="tour-cities__desc__count__num">{this.props.showinfoTourCity.show_total}</span>
                       <span className="tour-cities__desc__count__arrow">{"场"}</span>
                       <span className="tour-cities__desc__count__arrow">{">"}</span>
                   </span>
                        </div>
                        <div className="tour-cities__list">
                            <div className="tour-cities__list__content">
                                {/*{*/}
                                    {/*this.props.showinfoTourCity.tour_list.map((v,i)=>{*/}
                                        {/*return(*/}
                                            {/*<div className="tour-cities__list__content__item">*/}
                                                {/*<div className="tour-cities__list__content__item__city">{v}</div>*/}
                                                {/*<div className="tour-cities__list__content__item__date">{"09/15"}</div>*/}
                                            {/*</div>*/}
                                        {/*)*/}
                                    {/*})*/}
                                {/*}*/}
                            </div>
                        </div>
                    </div>
                    {/*演出介绍*/}
                    <div className="intro">
                        <div className="intro__title">演出介绍</div>
                        <div className="intro__content">
                            <p>{"记忆中的秋天总是有轻轻拂过发梢的风。"}</p>
                            <p>{"微凉的，金黄色的风，夹杂着属于夏天的一点花香味和属于冬季的一丝安宁，卷起坠落的红色枫叶，也带走那些夏天里不计后果的冲动和疯狂。。"}</p>
                            <p>{"我们就是在这样的季节里慢慢长大的。。"}</p>
                            <p>{"秋的乐章把金色涂上每个生命，于是我们得以踏着音乐的弧线，跟着小魔女琪琪在带着便当香甜气味的风中起舞，乘着龙猫电车在幽静的森林中穿行，或者跳上那座巨大的移动城堡，和哈尔一起为了和平和正义而战……。。"}</p>
                            <p>{"秋总是能唤起很多美好，每一个少年都在这个季节里，在微凉的风和麦粒的香气里，在神秘而特别的、梦境一样的生活里，学会正义、勇敢和坚强，学会拥抱爱，学会成长。。。"}</p>
                            <p>{"乐手们特别的演绎，让久石让音乐中那些成长的酸涩与欣喜，淡淡地随着音符飘散在风中，落进心里。这个秋季，在那些音符随风划过的时候，请伸出手来接住它们，来一起聆听这一份成长的乐章吧！。。"}</p>
                            <p><img className="img" src="https://image.juooo.com//////group1/M00/02/A5/rAoKmVzs2bGAJTc-AAk3jmkZbgs376.png" alt=""/></p>
                            <p>{"&nbsp;"}</p>
                            <p>{"乐团简介"}</p>
                            <p>{"中世爱乐乐团由中央音乐学院、中国音乐学院、上海音乐学院、沈阳音乐学院、星海音乐学院优秀毕业生及优秀青年教师、副教授、国家一级演奏家、国内外一流的音乐表演艺术家组建成的精英乐团。"}</p>
                            <p>{"中世爱乐乐团在深圳音乐厅、广州星海音乐厅、北京音乐厅、上海东方艺术中心、杭州剧院、昆明大剧院、湖北剧院等成功上演了天空之城—久石让视听音乐会，并取得了一票难求的傲人成绩。乐团在随后的时间里与国内各大剧场、知名演奏家及指挥家们再度合作，在上海、杭州、南京、广州、深圳、福建、昆明、大连、沈阳、哈尔滨等地陆续演出久石让主题系列，且常常爆满。所到之处，当地报纸、电视、电台、网络媒体纷纷报道演出盛况，并给与了高度评价。经典的久石让音乐《天空之城》、《哈尔的移动城堡》、《魔女宅急便》以及电影《菊次郎的夏天》中的《Summer》和《The Rain》等作品深深打动了现场观众。"}</p>
                            <p>{"&nbsp;"}</p>
                            <p>{"曲目单"}</p>
                            <p>{"1.《四季》秋 维瓦尔第"}</p>
                            <p>{"2.《魔女宅急便》启程之日"}</p>
                            <p>{"3.《魔女宅急便》能看见海的街"}</p>
                            <p>{"4.《天空之城》"}</p>
                            <p>{"5.《风之谷》"}</p>
                            <p>{"6.《龙猫》豆豆龙"}</p>
                            <p>{"7.《龙猫》风之甬道"}</p>
                            <p>{"8.《红猪》"}</p>
                            <p>{"-----------------------------中场休息---------------------------------------"}</p>
                            <p>{"9.《千与千寻》与你同在"}</p>
                            <p>{"10.《千与千寻》再度"}</p>
                            <p>{"11.《千与千寻》生命的名字"}</p>
                            <p>{"12.《幽灵公主》阿西达卡战记"}</p>
                            <p>{"13.《花火》Hana Bi"}</p>
                            <p>{"14.《悬崖上的金鱼姬》"}</p>
                            <p>{"15.《哈尔的移动城堡》世界的约定"}</p>
                            <p>{"16.《机器猫》"}</p>
                            <p>{"（演出曲目以实际演出为准）"}</p>
                            <p><br/></p>
                        </div>
                        <div className="intro__mask" onClick={()=>{
                            document.querySelector(".intro").style.height = "auto";
                            document.querySelector(".intro__mask").style.display = "none";
                            document.querySelector(".intro__more").style.display = "none"
                        }}>展示全部</div>
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
        }else {
            return false
        }

    }
    componentWillMount(){
        // console.log(this.props,"showinfo");

        this.props.getShowInfoTourCity();
    }
}
function mapStateToProps(state) {

    // if(state.showinfoReducer.showinfoState.length!==0){
    //     console.log(state.showinfoReducer.showinfoState,"yyy");
    // }
    return{
        showinfoTourCity:state.showinfoReducer.showinfoTourCity
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(ShowinfoTour) ;