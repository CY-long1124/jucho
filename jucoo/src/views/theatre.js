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
		
        <div>
			<div>剧院</div>
						{
							this.state.data.map((v,i)=>{
							return (
								<div className="logo" key={i}>
												<div className = "logoTop">
													<img className="pic" src= {v.pic} alt=""/>	
													<a href="">
														<h2>{v.name}</h2>
														<span>{v.count}场在售演出</span>
													</a>
													<div id="icon" href="#" className="iconfont ">
														<span>&#xe63b;</span>
													</div>
												</div>
										
																				{
										v.show_list.map((b,i)=>{
											return (
												<div className = "logobottom" key={i}>
												<img className="pics" src= {b.pic} alt=""/>	
											</div>
											)
										})
									}



											
											
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
					console.log(data.data.theatre_list)

					// console.log(this.props)

this.setState({
				data:data.data.theatre_list,
		
})
				
				
				})
		}
	}	

export default Theatre;