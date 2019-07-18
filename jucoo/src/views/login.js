import React from 'react';
import '../assets/css/login.css'
import axios from "axios"
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
	login(){
		axios.post("/login/login",{
			tel:this.refs.tel.value,
			password:this.refs.password.value
		}).then(({data})=>{
			console.log(data)
			if(data.ok===2){
				localStorage.userName=data.tel
				this.props.history.push("/myjuooo")
				
			}
		})
	}
    render(){
        return (
            <div className="login">
                 <div>
                	<div className="goout">
                		<h2 className="iconfont">&#xe616;</h2>
                	</div>
                </div>
				<div>
					<div className="main">
						<h2 className="title1">登录中心</h2>
						<div className="main_1">
							<div className="main_2">
								<span>
									<label className="tel_label">+86</label>
									<input type="text" ref={"tel"} className="lg_input" placeholder="请输入手机号"/>
								</span>
							</div>
							<div className="main_2">
								<span>
								<label className="tel_label">密码</label>
									<input type="password" ref={"password"} className="lg_input" placeholder="请输入密码"/>
								</span>
							</div>
						</div>
						<div>
							<span className="login_btn" onClick={this.login.bind(this)}>登录</span>
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
						<div className="login_foot_main">
							<span className="iconfont">&#xe6d7;</span>
							<span className="iconfont">&#xe6d9;</span>
						</div>
					</div>
				</div>
            </div>
        )
    }
}
export default Login;