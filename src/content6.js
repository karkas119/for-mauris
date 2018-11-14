import React, {Component} from 'react';
import './index.css';
import poster4 from './img/poster4.png'



class Content6 extends Component{
    render(){
        return(
            <div className='episode4'>
                <img src={poster4} alt='not found'/>
                <p>Сладкая горечь</p>
                <span>2005</span>
                <span><p>Сезон: 1 Эпизод: 8</p></span>
            </div>
        )
    }
}
export default Content6