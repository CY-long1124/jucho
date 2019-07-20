import React from 'react';
import HomeHead from '../components/jucoo/homeHead'
import Classfy from '../components/jucoo/classfy'
import HotBlock from '../components/jucoo/hotBlock'
import TourBlock from '../components/jucoo/tourBlock'
import CategoryBlock from '../components/jucoo/categoryBlock'
import AdBox from '../components/jucoo/adBox'
import Stadiums from '../components/jucoo/stadiums'
import YanLoading from '../components/jucoo/yanLoading'
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
                <AdBox></AdBox>
                <HotBlock></HotBlock>
                <TourBlock></TourBlock>
                <CategoryBlock></CategoryBlock>
                <Stadiums></Stadiums>
                <YanLoading></YanLoading>
            </div>
        )
    }
    
}
export default Jucoo;