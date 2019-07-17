import React from 'react';
import '../assets/css/theatreStyleCenter.css';
import '../assets/iconfont/iconfont.css';

class TheatreStyleCenter extends React.Component{
	render(){
		return (
			<div className="theatreStyleCenter">
				<div className="theatreStyleCenter_logo" >
					<h2 className="iconfont">&#xe616;</h2>
				</div>
				<span>南山文体中心</span>
				<h3 className="iconfont">&#xe63b;</h3>
				<div className="theatreStyle_img">
					<img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg"/>
				</div>
				<div className="theatreStyle_nav">
					<div className="the_nav_z" >
					<img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-show.png"/>
						<h5>演出</h5>
					</div>
					<div className="the_nav_z" >
					<img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-calendar.png"/>
						<h5>日历</h5>
					</div>
					<div className="the_nav_z" >
					<img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-theater.png"/>
						<h5>剧院</h5>
					</div>
					<div className="the_nav_z" >
					<img src="https://m.juooo.com/public/basic//Home/app/app-juooo5/images/index/icon-offer.png"/>
						<h5>特惠</h5>
					</div>
				</div>
				<div className="theatar_show"><h2>热门演出</h2></div>
				
				
			</div>
		)
	}
}

export default TheatreStyleCenter;