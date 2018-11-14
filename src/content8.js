import React, {Component} from 'react';
import './index.css';
import poster5 from './img/poster5.png'



class Content8 extends Component{
    render(){
        return(
            <div className='episode6'>
                <img src={poster5} alt='not found'/>
                <p>Патрик Мелроуз</p>
                <span>2005</span>
                <span><p>Сезон: 3 Эпизод: 2</p></span>
            </div>
        )
    }
}
export default Content8