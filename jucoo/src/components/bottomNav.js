import React from 'react';
import {
    withRouter
} from 'react-router-dom'
import '../assets/css/BottomNav.css'
class BottomNav extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <ol className="bott">
                    <li onClick={()=>{
                        this.props.history.push("/")
                    }}>聚橙</li>
                    <li onClick={()=>{
                        this.props.history.push("/theatre")
                    }}>剧院</li>
                    <li onClick={()=>{
                        this.props.history.push("/eticket")
                    }}>票夹</li>
                    <li onClick={()=>{
                        this.props.history.push("/myjuooo")
                    }}>我的</li>
                </ol>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props)
    }
}
export default withRouter(BottomNav);