import React from 'react';
import '../assets/css/login.css'
class Login extends React.Component{
    constructor(){
        super();
    }
	change_title(e){
			if(e.target.innerText=="验证码登录"){
				e.target.innerText="密码登录"
			}else{
				e.target.innerText="验证码登录"
			}
	}
    render(){
        return (
            <div className="login">
                <div>
					<h2 className="goout">返回</h2>
				</div>
				<div>
					<div className="main">
						<h2 className="title1">欢迎来到聚橙网</h2>
						<div className="main_1">
							<div className="main_2">
								<span>
									<label className="tel_label">+86</label>
									<input type="text" className="lg_input" placeholder="请输入手机号"/>
								</span>
							</div>
							<p className="tip">未注册手机号验证成功后,自动注册账户</p>
						</div>
						<div>
							<span className="login_btn">获取验证码</span>
						</div>
						<div className="other">
							<span>邮箱注册</span>
							<span onClick={this.change_title.bind(this)}>密码登录</span>
						</div>
					</div>
				</div>
                <div className="foot_warp">
					<div className="foot_title">
						<p className="foot_title_tex">其他登录方式</p>
					</div>
				</div>
            </div>
        )
    }
}
export default Login;