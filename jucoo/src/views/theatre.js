import React from 'react';
import axios from 'axios';
import '../assets/css/theatre.css'
import '../assets/iconfont/iconfont.css'

class Theatre extends React.Component{
    constructor(){
        super();
		this.state = {
				data:[]
		}
    }
    render(){
        return (
		
        <div className="theatre_s">
			<div className="theatre_log">
				<span>剧院</span>
			</div>
				{
					this.state.data.map((v,i)=>{
						return (
				<div className="theatre_logo" key={i}>
					<div className = "theatre_logo_Top" >
						<img className="theatre_pic" src= {v.pic} alt="" onClick={()=>{this.props.history.push("/theatreStyleCenter/"+v.id)}}/>	
						<a href="" onClick={()=>{this.props.history.push("/theatreStyleCenter/"+v.id)}}>
							<h2>{v.name}</h2>
							<span>{v.count}场在售演出</span>
						</a >
						<div id="icon" href="#" className="iconfont " onClick={()=>{this.props.history.push("/theatreStyleCenter/"+v.id)}}>
							<span >&#xe63b;</span>
						</div>
					</div>
					
					<div className="theatre_logo_bottom">
						<div className = "theatre_bottom" key={i}>
					{
						v.show_list.map((b,i)=>{
							return (
					
							<div className = "theatre_z_bottom" key = {i}>
								<div className="n_ew">{b.show_time}</div><hr/>
								<div><img className="pics" src= {b.pic} alt=""/></div>	
							</div>
							)
						})
					}
						</div>

						</div>		
					</div>
				) 
			})
		}
		</div>
	)
}
				
		componentDidMount(){
			
			axios.get("/juco/RestTheatre/getTheatreList?page=1&version=6.0.1&referer=2&timestamp=1563258164")
				.then(({data})=>{
					// console.log(data.data.theatre_list)

					// console.log(this.props)

			this.setState({
				data:data.data.theatre_list,
					
				})
			})
		}
	}	

export default Theatre;