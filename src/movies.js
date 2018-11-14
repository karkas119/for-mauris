import React, { Component } from 'react';
import './index.css';
import response from './response'

class Movies extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items:[]

        };
    }

    componentWillMount() {
        fetch(response)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render(){
 const {error, isLoaded, items} = this.state;
  if (error){
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
  return <div>Loading...</div>;
  } else{
      return (
          <ul>
              {items.map(item =>(
                  <li key={items}>{item.id} {item.name}</li>
              ))}
          </ul>
      );
  }
    }


}

export default Movies;