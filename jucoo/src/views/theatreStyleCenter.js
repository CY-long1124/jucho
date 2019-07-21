import React from 'react';
import '../assets/css/theatreStyleCenter.css';
import '../assets/iconfont/iconfont.css';
import axios from "axios"


class TheatreStyleCenter extends React.Component{
	constructor(){
		super();
		this.state={
			conxt:{},
			dataList:[]
		}
	}
	render(){
		return (
			<div>
				<div className="theatreStyleCenter">
					<div className="thear">
					<div className="theatreStyleCenter_logo">
						<h2 className="iconfont" onClick={()=>{this.props.history.push("/theatre")}}>&#xe616;</h2>
					</div>
					<span >{this.state.conxt.name}</span>
					<h3 className="iconfont" >&#xe63b;</h3>
					</div>
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
					
							{
								this.state.dataList.map((v,i)=>{
									return(
										<div className= "theatar_car" key={i}>
											<div className= "theatar_car_img"><img src={v.pic}/></div>
											<div className="theatar_car_right">
												<p>{v.name}</p>
												<h4>2019.07.19 - 2019.07.20</h4>
												<h2>{v.venue_name}</h2>
												<h3>￥{v.min_price}起</h3>
											</div>
										</div>
									)
								})
							}
								
					<div className="theatar_input">
						<h6 onClick={()=>{this.props.history.push("/showsLibrary/0/1")}}>查看全部演出&nbsp;&nbsp;></h6>
					</div>
				
					
				</div>
				
			</div>
		)
	}
	componentWillMount(props){
// 		console.log(9999999999999,this);
		axios.get("https://m.juooo.com/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2")
			.then(({data})=>{
				// console.log(212121,this.props.history)
				for(var i =0 ;i<data.data.theatre_list.length;i++){
					if(this.props.match.params.id===data.data.theatre_list[i].id){
							this.setState({
								conxt:data.data.theatre_list[i]
							})
						};
					}
				
					
				})
	axios.get("/juco/Search/getShowList?category=36&city_id=0&page=1&keywords=&version=6.0.1&referer=2")
		.then(({data})=>{
			// console.log(11111,data.data.list)
				this.setState({
								dataList:data.data.list.slice(0,5)
			})
			
		})
	}
}

export default TheatreStyleCenter;