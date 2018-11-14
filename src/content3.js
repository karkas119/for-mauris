import React, {Component} from 'react';
import './index.css';
import poster2 from './img/poster2.png'


class Content3 extends Component {
    render() {
        return (
            <div className='episode2'>
                <img src={poster2} alt='not found'/>
                <p>Как я встретил вашу маму</p>
                <span>2005</span>
                <span><p>Сезон:2 Эпизод:14</p></span>
            </div>

        )
    }
}

export default Content3