import React from 'react';
import '../../assets/css/homeHead.css'
class AdBox extends React.Component{
    render(){
        return(
            <div className="ad-box">
                    <div className="advise-box">
                        <ul className="advise">
                            <li>
                                <a>
                                    <div>
                                        <h3>橙PLUS卡</h3>
                                        <div>
                                            <p>
                                            送 
                                            <span className="red">100元</span>
                                            ,享V+权益
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.juooo.com//group1/M00/02/D0/rAoKmV0jZBGAD_e4AAAE27hwBgs927.png" alt=""/>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div>
                                        <h3>VIP+专区</h3>
                                        <div>
                                            <p>
                                            尊享 
                                            <span  className="red">10</span>
                                            大权益
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.juooo.com//group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png" alt=""/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="advise-b">
                            <li>
                                <a>
                                    <div>
                                        <h3>积分商城</h3>
                                        <div>
                                            <p>
                                            用积分,
                                                <span className="red">0元</span>
                                            购票
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.juooo.com//group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png" alt=""/>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div>
                                        <h3>日历</h3>
                                        <div>
                                            <p>
                                            演出信息,
                                                <span className="red">一目了然</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.juooo.com//group1/M00/02/63/rAoKmVyumJuADezsAAAFQQ7pzxI319.png" alt=""/>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div>
                                        <h3>欢聚橙卡</h3>
                                        <div>
                                            <p>
                                                <span className="red">33元</span>
                                                看演出
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://image.juooo.com//group1/M00/03/0D/rAoKNVyumKiAfP1qAAACYTizNOw440.png" alt=""/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default AdBox;