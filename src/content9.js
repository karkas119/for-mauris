import React, {Component} from 'react';
import './index.css';
import arrow1 from './img/arrow1.png'

class Content9 extends Component {
    render() {
        return (
            <div className="more-episodes" style={{top:'2000px'}}>
                <p>Показать основные <img src={arrow1} alt='not found'/></p>
            </div>
        )
    }

}

export default Content9