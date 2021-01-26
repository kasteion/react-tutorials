import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        return(
            <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
        );
    }
}

export default App;