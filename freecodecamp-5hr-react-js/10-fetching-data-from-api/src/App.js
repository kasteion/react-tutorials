import React from 'react';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        fetch('https://swapi.dev/api/people/1/')
        .then( response => response.json())
        .then( data => this.setState({ loading: false, character: data}));
    }

    render(){
        return(
            <h1>{this.state.loading ? 'Loading...' : this.state.character.name}</h1>
        )
    }
}

export default App;