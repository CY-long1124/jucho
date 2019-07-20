import React from 'react';
import "../assets/css/showinfo.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import axios from "axios"
import showinfoCreator from "../store/actionCreator/showinfoCreator"
import ShowinfoHeader from "../components/showinfo/showinfo-header"
import ShowinfoMain from "../components/showinfo/showinfo-main"
import ShowinfoTour from "../components/showinfo/showinfo-tour"
import ShowinfoRecommend from "../components/showinfo/shoeinfo-recommend"
class Showinfo extends React.Component{
    constructor(props){
        super(props);
    }
	buyEticket(v){
		// console.log(v,v.pic,v.schedular_id,v.show_name,v.price_range)
		axios.post("/login/buyEticket",{
			show_img:v.pic,
			show_id:v.schedular_id,
			show_name:v.show_name,
			show_price:v.price_range
		}).then(({data})=>{
			console.log(data)
		})
	}
    render(){
        if(this.props.showinfoState.static_data){
            // console.log(this.props.showinfoState.static_data,"000");
            return (
                <div className="detail">
                    {/*头部信息*/}
                    <ShowinfoHeader/>
                    {/*描述区*/}
                    <ShowinfoMain/>
                    {/*巡演城市*/}
                    <ShowinfoTour/>
                    {/*相关推荐*/}
                    <ShowinfoRecommend/>
                    {/*选座购买*/}
                    <div className="bottom-bar">
                        <div className="bottom-bar__client-service">
                            <img className="bottom-bar__client-service__img .img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt=""/>
                            <div className="bottom-bar__client-service__text">客服</div>
                        </div>
                        <div className="bottom-bar__btn" onClick={this.buyEticket.bind(this,this.props.showinfoState.static_data)}>
                            选座购买
                        </div>
                    </div>
                </div>
            )
        }else {
            return false
        }
    }
    componentWillMount(){
        // console.log(this.props,"showinfo");

        this.props.getShowInfo();
    }
}
function mapStateToProps(state) {
    // console.log(state.showinfoReducer.showinfoState,"yyy");
    return{
        showinfoState:state.showinfoReducer.showinfoState
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(showinfoCreator,dispatch))(Showinfo) ;