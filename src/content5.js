import React, {Component} from 'react';
import './index.css';
import line from "./img/line.png";
import poster3 from "./img/poster3.png"

class Content5 extends Component{
    render(){
        return(
            <div className='episode3'>
                <h3>9 июля 2018</h3>
                <img className='line' src={line} alt='not found'/>
                <img src={poster3} alt='not found'/>
                <p>Заложница</p>
                <span>2016-</span>
                <span><p>Сезон:2 Эпизод:4</p></span>
            </div>
        )
    }
}
export default Content5