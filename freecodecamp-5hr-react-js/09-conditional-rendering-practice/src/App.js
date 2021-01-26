import React from 'react';

import LoginButton from './components/LoginButton';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            logedIn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) => {
            return {
                logedIn: !prevState.logedIn
            }
        })
    }

    render(){
        return(
            <div>
                <LoginButton logedIn={this.state.logedIn} onClick={this.handleClick}></LoginButton>
            </div>
        )
    }
}

export default App;