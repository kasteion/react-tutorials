import React from 'react';

import Conditional from './components/Conditional';

class App2 extends React.Component {
    constructor(){
        super()

        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setInterval(
            () => {
                this.setState(
                    { isLoading: false }
                )
            },
            1500
        );
    }

    render() {
        return(
            <Conditional isLoading={this.state.isLoading}></Conditional>
        )
    }
}

export default App2;