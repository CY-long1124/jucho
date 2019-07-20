import React from 'react';
import '../assets/css/search.css'
class Search extends React.Component{
    render(){
        return(
            <div>
                <section>
                    <div>
                        <span className="iconfont">&#xe614;</span>
                        <form>
                            <input type="search" placeholder="搜索热门演出"/>
                        </form>
                        <span className="iconfont">&#xe604;</span>
                    </div>
                    <span>取消</span>
                </section>
            </div>
        )
    }
}
export default Search