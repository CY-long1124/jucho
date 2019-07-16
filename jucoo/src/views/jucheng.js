import React from 'react';
import HomeHead from '../components/jucoo/homeHead'
import Classfy from '../components/jucoo/classfy'
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
                <Classfy></Classfy>
                <div className="adver">
                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKNV0jflaAL5_EAAD3QE0LKFo824.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default Jucoo;