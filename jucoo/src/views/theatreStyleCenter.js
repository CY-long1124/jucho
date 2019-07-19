import React from 'react';
import '../assets/css/theatreStyleCenter.css';
import '../assets/iconfont/iconfont.css';
import axios from "axios"


class TheatreStyleCenter extends React.Component{
	constructor(){
		super();
		this.state={
			conxt:{}
		}
	}
	render(){
		return (
			<div>
				<div className="theatreStyleCenter">
					<div className="theatreStyleCenter_logo">
						<h2 className="iconfont" onClick={()=>{this.props.history.push("/theatre")}}>&#xe616;</h2>
					</div>
					<span>{this.state.conxt.name}</span>
					<h3 className="iconfont" >&#xe63b;</h3>
					<div className="theatreStyle_img">
						<img src={this.state.conxt.pic}/>
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
				
			</div>
		)
	}
	componentDidMount(props){
		console.log(this.props)
		axios.get("https://m.juooo.com/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2")
			.then(({data})=>{
				console.log(212121,this.props.history)
				for(var i =0 ;i<data.data.theatre_list.length;i++){
					if(this.props.history.location.state===data.data.theatre_list[i].name){
							this.setState({
								conxt:data.data.theatre_list[i]
							})
						};
					}
				
					
				})
	
				
				
			}
		}

export default TheatreStyleCenter;