import React from 'react';
import '../assets/css/search.css'
import '../assets/css/showinfo.css'
import axios from 'axios'
import {
    withRouter
} from "react-router-dom"
class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            dataList:[]
        }
    }
    render(){
        return(
            <div>
                <section className="soso">
                    <div className="sssss">
                        <span className="iconfont">&#xe614;</span>
                        <form>
                            <input type="search" ref={"sear"} placeholder="搜索热门演出" onInput={()=>{
                                this.searchFor.bind(this,this.refs.sear.value)()
                            }}/>
                        </form>
                        <span className="iconfont">&#xe604;</span>
                    </div>
                    <span onClick={()=>{
                        this.props.history.go(-1);
                    }}>取消</span>
                </section>
                <div style={{width:"100%",height:"44px"}}>

                </div>
                <div className="recommend__list" style={{display:this.state.dataList.length?"block":"none"}}>
                    {
                        this.state.dataList.map((v,i)=>{
                            return (
                                <div className="item" key={i} onClick={()=>{
                                    this.props.history.push("/showinfo/"+ v.sche_id)
                                }}>
                                    
                                    <div className="item__cover">
                                        <img className="cover__img img" src={v.pic} alt=""/>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__date-week">
                                            <span className="item__info__date-week__date">{v.show_time_top}</span>
                                        </div>
                                        <div className="item__info__name">
                                            <div className="item__info__name__content">
                                                {v.name}
                                            </div>
                                        </div>
                                        <div className="item__info__place">
                                            {v.venue_name}
                                        </div>
                                        <div className="item__info__price">
                                            <span className="item__info__price__num">{v.min_price}</span>
                                            <span className="item__info__price__text">起</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    searchFor(key){
        console.log(this.refs.sear.value);
        axios.get("/juco/Search/getShowList?keywords="+key+"&page=1&sort_type=1&version=6.0.1&referer=2").then(({data})=>{
            // console.log(data.data.list);
            this.setState({
                dataList : data.data.list
            })
        })
    }
}
export default withRouter(Search)