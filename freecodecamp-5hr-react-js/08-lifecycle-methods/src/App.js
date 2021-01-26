import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.state = {};
    }

    // DEPRECATED!
    componentWillMount(){}

    static getDerivedStateFromProps(props, state){
        // Should return the new, updated state based upon props...
        // You probably dont need derived state... there is a better way...
        // Highly discoraged...
    }

    getSnapshotBeforeUpdate() {
        // Sort of create a backup of the current way things are...
        // Not a super common one.
    }

    // This component did just mount to the screen, only runs once...
    // rerender does not run componentDidMount because that does not unmount and mount the component.
    componentDidMount() {
        // Get the data i need to correctly display
    }

    // Every time the component receives props from its parent component.
    // Every time the parent component changes the props that sends to the child component
    // DEPRECATED!
    componentWillReceiveProps(nextProps){
        if (nextProps.whatever !== this.props.whatever ) {
            // Do something important here...
        }
    }

    // Gives us a chance to optimize our app. 
    // Gives us the oportunity to decide if the component should update.
    shouldComponentUpdate(nextProps, nextState) {
        // Return true if want it to update
        // Return false if not
    }

    // DEPRECATED!
    componentWillUpdate(){}

    // To do some cleanup 
    componentWillUnmount(){
        // Cleanup your code befor your component disapears
        // Example: Remove the event listener
    }

    // render Lifecycle method
    render(){
        return(
            <h1>Code Goes Here</h1>
        )
    }
}

export default App;