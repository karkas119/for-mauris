import React, {Component} from 'react';
import Calend from './calendar'
import './index.css';
import Header from './header.js'
import Content from './content.js'


class App extends Component {
    render() {
        return (
            <div className="content">
                <Header/>
                <Content/>
                <Calend/>


            </div>
        )
    }
}

export default App;
