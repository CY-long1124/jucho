import React from 'react';
import "../assets/css/myjuooo.css"
class Myjuooo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="info_body">
                <div className="main_info">
					<div className="main_info_main">
						<div className="myjuooo_main_t">
							<img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"/>
							<span>橙子</span>
							<span>id:{localStorage.userName}</span>
						</div>
						<div className="myjuooo_main_m">
							<p>普通会员</p>
						</div>
						<div className="myjuooo_main_b">
							<a>
								<p>0</p>
								<p>账户余额</p>
								<div></div>
							</a>
							<a>
								<p>0</p>
								<p>积分</p>
								<div></div>
							</a>
							<a>
								<p>0</p>
								<p>优惠券</p>
								<div></div>
							</a>
							<a>
								<p id="myjuooo_other">立即开通</p>
								<p>橙PLUS卡</p>
							</a>
						</div>
					</div>
				</div>
				<div className="myjuooo_img">
					<a>
						<img src="https://m.juooo.com/static/img/ad.411f5e6.png"/>
					</a>
				</div>
				<div className="myjuooo_list">
					<ul>
						<li>
							<a>
								<i className="iconfont">&#xe67b;</i>
								<p>我的订单</p>
							</a>
						</li>
						<li>
							<a>
								<i className="iconfont">&#xe640;</i>
								<p>我的票夹</p>
							</a>
						</li>
						<li>
							<a>
								<i className="iconfont">&#xe669;</i>
								<p>我的卡包</p>
							</a>
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<a>
								<i className="iconfont">&#xe601;</i>
								<p>实名购票人</p>
							</a>
						</li>
						<li>
							<a>
								<i className="iconfont">&#xe611;</i>
								<p>收货地址</p>
							</a>
						</li>
						<li>
							<a>
								<i className="iconfont">&#xe77a;</i>
								<p>意见反馈</p>
							</a>
						</li>
						<li>
							<a>
								<i className="iconfont">&#xe67a;</i>
								<p>客服帮助</p>
							</a>
						</li>
					</ul>

				</div>
            </div>
        )
    }
}
export default Myjuooo;