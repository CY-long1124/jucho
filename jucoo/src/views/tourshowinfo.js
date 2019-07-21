import React from 'react';
import {
  connect,
} from 'react-redux'
import {
  bindActionCreators,
} from "redux";
import {withRouter} from "react-router-dom";
import '../assets/css/tourshowinfo.css'
import tourShowInfoCreator from "../store/actionCreator/tourShowInfo";
class TourShowInfo extends React.Component{
  render(){
    return (
      <div id="TourShowInfo">
      
      {
          <div dangerouslySetInnerHTML={{__html: ` <div class="views round-detail">

        <div class="view">
            <!-- 顶部导航 -->
            <header class="navbar detail-header">
                <div class="navbar-inner navbar-on-center">
                    <div class="left js-personal-link">
                        <a href="javascript:;" class="link">
                            <span class="icon icon-menu-left"></span>
                        </a>
                    </div>
                    <div class="center">
                        巡演详情
                    </div>
                    <div class="right">
                        <a href="#" class="link open-panel icon-only js-share-btn">
                            <span class="icon icon-share"></span>
                        </a>
                    </div>
                </div>
            </header>
            <!-- 顶部导航 END -->
			<div class="shadow-bg js-shadow-bg"></div>
            <!-- 分享弹框 -->
            <div class="share-wrapper">
                <div class="share-layout" style="height: 9.05333rem;">
                    <div class="title">分享<i class="icon icon-remove js-share-close js-close-btn"></i></div>
                    <div class="share-methods">
                    	<div class="item">
                            <a class="icon-weibo" src="javascript:;"></a>
                            <span>微博</span>
                        </div>
                        <div class="item">
                            <a class="icon-qq" src="javascript:;"></a>
                            <span>腾讯微博</span>
                        </div>
                        <div class="item">
                            <a class="icon-qzone" src="javascript:;"></a>
                            <span>QQ空间</span>
                        </div>                    
                    </div>
                    
                </div>
            </div>
            <!-- 分享弹框 END -->
            <div class="share-wechat-wrapper">
            	<div class="share-pointer"></div>
            </div>

            <div class="pages">
                <!-- 巡回演出详情 -->
                <main class="js-main-content">
                    <!-- 演出海报 -->
                    <article class="poster">
	                    <div class="poster-bg-shadow">
		                </div>
		                <div class="poster-bg-wrapper">
		                    <img class="poster-bg" src="https://image.juooo.com///group1/M00/02/FA/rAoKNVyZ8TyAU01hAABtVsXkcoQ497.jpg" alt=" 法语音乐剧《摇滚红与黑》" title=" 法语音乐剧《摇滚红与黑》">
		                </div>
                        
                        <div class="poster-fg"></div>
                        <div class="poster-img">
                            <div class="img-bg">
                                <img class="img-fg" src="https://image.juooo.com///group1/M00/02/FA/rAoKNVyZ8TyAU01hAABtVsXkcoQ497.jpg" alt=" 法语音乐剧《摇滚红与黑》" title=" 法语音乐剧《摇滚红与黑》">
                            </div>
                            <a class="round-num" href="javascript:;">35场巡演</a>
                        </div>
                    </article>
                    <!-- 演出海报 END -->

                    <!-- 巡回演出信息 -->
                    <article class="text-desc">
                        <h3 class="title">
                             法语音乐剧《摇滚红与黑》                        </h3>
                        <div class="row">
                            时间：<span class="time">2019.09.27 - 2019.11.17</span>
                        </div>
                    </article>
                    <!-- 巡回演出信息 END -->

                    <!-- 巡回演出排期 -->
                    <article class="round-list">
                      	<div class="v-line"></div>	
                        <ul class="round-list-wrapper">
                                                        <li class="item active ">
                                <div class="item-left">
                                    <span class="day">9.27</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="102447">
                                    <span>石家庄站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>石家庄大剧院-大剧场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="102447">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">9.28</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="102448">
                                    <span>石家庄站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>石家庄大剧院-大剧场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="102448">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.3</span>
                                    <span class="time">周四 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92791">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92791">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.4</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92792">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92792">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.5</span>
                                    <span class="time">周六 14:00</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92808">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92808">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.5</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92802">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92802">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.6</span>
                                    <span class="time">周日 14:00</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92809">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92809">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.6</span>
                                    <span class="time">周日 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="92810">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="92810">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.8</span>
                                    <span class="time">周二 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96115">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96115">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.9</span>
                                    <span class="time">周三 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96116">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96116">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.10</span>
                                    <span class="time">周四 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96117">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96117">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.11</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96118">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96118">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.12</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96120">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96120">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.13</span>
                                    <span class="time">周日 14:00</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96121">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96121">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.13</span>
                                    <span class="time">周日 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96122">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96122">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.15</span>
                                    <span class="time">周二 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="101064">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="101064">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.16</span>
                                    <span class="time">周三 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="101065">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="101065">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.18</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="101067">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="101067">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.19</span>
                                    <span class="time">周六 14:00</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="101069">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="101069">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.20</span>
                                    <span class="time">周日 14:00</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="101070">
                                    <span>上海站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>上汽·上海文化广场</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="101070">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.25</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100508">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100508">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.26</span>
                                    <span class="time">周六 14:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100507">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100507">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.26</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100506">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100506">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.27</span>
                                    <span class="time">周日 14:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100505">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100505">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.27</span>
                                    <span class="time">周日 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100504">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100504">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">10.29</span>
                                    <span class="time">周二 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="100503">
                                    <span>北京站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>世纪剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="100503">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.8</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96230">
                                    <span>广州站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>广州大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96230">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.9</span>
                                    <span class="time">周六 14:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96231">
                                    <span>广州站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>广州大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96231">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.9</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="96232">
                                    <span>广州站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>广州大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="96232">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.14</span>
                                    <span class="time">周四 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="94410">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="94410">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.15</span>
                                    <span class="time">周五 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="94411">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="94411">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.16</span>
                                    <span class="time">周六 14:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="97842">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="97842">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.16</span>
                                    <span class="time">周六 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="97844">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="97844">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.17</span>
                                    <span class="time">周日 14:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="97845">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="97845">购票</div>
                                                            </li>
                                                        <li class="item  ">
                                <div class="item-left">
                                    <span class="day">11.17</span>
                                    <span class="time">周日 19:30</span>
                                </div>
                                <div class="item-center">
                                    <div class="dot"></div>
                                </div>
                                <div class="item-right js-buy-ticket" id="97846">
                                    <span>深圳站</span>
                                    <span class="locate"><i class="icon icon-map-marker"></i>南山文体中心剧院大剧院</span>
                                </div>
                                                                <div class="buy-btn btn btn-default" id="97846">购票</div>
                                                            </li>
                                                    </ul>
                    </article>
                    <!-- 巡回演出排期 -->
                </main>
                <!-- 巡回演出详情 END -->
            </div>
        </div>

    </div>`}}></div>
        //   this.props.tourShowsList.map((v,i)=>{
        //       return(
        //         <div key={i}>
        //                 {v.name}
                     
        //         </div>
        //       )
        // })

        }
      
      </div>
    );
}
componentWillMount(){
 // console.log(11111111,this.props);
  this.props.getTourList({}); 
 //console.log(777777777,this.props)
}
}
function mapStateToProps(state){  
  console.log(12121212,"state",state.tourShowInfo.tourShowsList);
  return{
        tourShowsList:state.tourShowInfo.tourShowsList,
        sid:"",
  }

}


export default connect(mapStateToProps, dispatch=>bindActionCreators(tourShowInfoCreator,dispatch))(withRouter(TourShowInfo));