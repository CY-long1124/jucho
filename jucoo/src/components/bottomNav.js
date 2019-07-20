import React from 'react';
import {
    withRouter
} from 'react-router-dom'
import '../assets/css/BottomNav.css'
import routerMess from '../router'
class BottomNav extends React.Component{
    constructor(){
        super();
        this.state = {
            bottom_slide_list : [
                {
                    name:"首页",
                    pic:"https://image.juooo.com//group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png",
                    url:"/"
                },
                {
                    name:"剧院",
                    pic:"https://image.juooo.com//group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png",
                    url:"/theatre"
                },
                {
                    name:"票夹",
                    pic:"https://image.juooo.com//group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png",
                    url:"/eticket"
                },
                {
                    name:"我的",
                    pic:"https://image.juooo.com//group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png",
                    url:"/myjuooo"
                }
            ],
            index:0,
			aaa:true
        }
    }
    render(){
        return (
            <div className="bootomNav" style={{display:this.state.aaa?"block":"none"}}>
                <ol className="bott">
                    
                    {
                        this.state.bottom_slide_list.map((v,i)=>{
                            return (
                                <li key={i}  onClick={()=>{
                                    this.props.history.push(v.url);
									if(!localStorage.userName&&v.url==="/eticket"){
										this.props.history.push("/register")
									}
                                    this.setState({
                                        index : i
                                    })
                                }}>
                                    
                                    <div className="hasColor">
                                        <img src={v.pic} alt=""  className={this.state.index === i?"hasColorImg":"noColorImg"}/>
                                    </div>
                                    <span>{v.name}</span>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
	componentWillReceiveProps(){
		 let a=routerMess.find((v)=>{return this.props.history.location.pathname.split("/")[1] === v.path.split("/")[1]})
		// console.log(666,a.isShow)
		if(!a.isShow){
			this.setState({
				aaa:false
			})
		}else{
			this.setState({
				aaa:true
			})
		}
	}
    componentDidMount(){
       
			
    }
	componentWillMount(){
		// console.log(333,routerMess)
		// console.log(444,this.props.location.pathname.split("/")[1])
		 let a=routerMess.find((v)=>{return this.props.location.pathname.split("/")[1] === v.path.split("/")[1]})

		// console.log(555,a.isShow)
		if(!a.isShow){
			this.setState({
				aaa:false
			})
		}

	}
}
export default withRouter(BottomNav);