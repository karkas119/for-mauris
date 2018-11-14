import React, { Component } from 'react';
import './index.css';
import screen from './img/screen.png'




class Content extends Component{
    render(){
        return(
            <div className='screen'>
                <img src={screen} alt='not found' />
                <p>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.</p>
            </div>
        )
    }
}

export default Content