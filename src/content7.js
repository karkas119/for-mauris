import React, {Component} from 'react';
import './index.css';
import poster1 from './img/poster1.png'



class Content7 extends Component{
    render(){
        return(
            <div className='episode5'>
                <img src={poster1} alt='not found'/>
                <p>Теория большого взрыва</p>
                <span>2013-...</span>
                <span><p>Сезон: 9 Эпизод: 3</p></span>
            </div>
        )
    }
}
export default Content7