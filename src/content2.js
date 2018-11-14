import React, {Component} from 'react';
import './index.css';
import poster1 from './img/poster1.png'
import line from './img/line.png'

class Content2 extends Component {
    render() {
        return (
            <div className='episode1'>
                <h3>10 июля 2018</h3>
                <img className='line' src={line} alt='not found'/>
                <img src={poster1} alt='not found'/>
                <p>Теория большого взрыва</p>
                <span>2013</span>
                <span><p>Сезон:2 Эпизод:12</p></span>
            </div>

        )
    }
}

export default Content2