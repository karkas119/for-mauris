import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import App2 from './App2'


class Calend extends Component {
    state = {
        date: new Date(),
    };

    onChange = date => this.setState({date});

    render() {
        return (
            <div className="calendar">
                <Link to='/second'>
                    <button>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}/>

                    </button>
                </Link>
                <Route path='/second' component={App2}/>

            </div>

        );
    }
}

export default Calend;