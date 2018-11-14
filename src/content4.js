import React, {Component} from 'react';
import './index.css';
import arrow from './img/arrow.png'

class Content4 extends Component {
    render() {
        return (
            <div className="more-episodes">
                <p>Еще 32 сериала <img src={arrow} alt='not found'/></p>
            </div>
        )
    }

}

export default Content4