import React from 'react';

import './App.css';

class App extends React.Component {
    render(){
        return(
            <div>
                <Header username='Fredy'/>
                <Greeting />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <header>
                Welcome{this.props.username ? `, ${this.props.username}` : ''}!
            </header>
        );
    }
}

class Greeting extends React.Component {

    constructor(){
        super();
        this.state = {
            answer: 'Yes'
        };
    }
    
    greet(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours < 12){
            timeOfDay = 'morning';
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'afternoon'
        } else {
            timeOfDay = 'night'
        }
        return timeOfDay
    }

    render(){
        this.greet();
        return(
            <h1>
                Good {this.greet()} to you, sir or madam!
            </h1>
        )
    }
}

export default App;