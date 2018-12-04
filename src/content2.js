import React, {Component} from 'react';
import './index.css';

const API = 'http://api.tvmaze.com/schedule';

class Content2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }


    render() {
        const {data} = this.state;
        return (
            <ul>
                {data.map(item => <li>{item.name}</li>)}
        </ul>
        )
    }
}

export default Content2
