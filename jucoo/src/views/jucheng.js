import React from 'react';
import HomeHead from '../components/jucoo/homeHead'
import '../assets/css/homeHead.css'

class Jucoo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="father">
                <HomeHead></HomeHead>
                <div style={{width:"100%",height:"196px",background:"purple"}}></div>
                
            </div>
        )
    }
}
export default Jucoo;