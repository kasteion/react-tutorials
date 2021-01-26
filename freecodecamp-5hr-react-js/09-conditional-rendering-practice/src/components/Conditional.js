import React from 'react';

const Conditional = props => {
    
    //let cond = props.isLoading ? <div>Loading</div> : <div>Loaded!</div>;
    //return(
    //    cond    
    //)
    return(
        <div>
            {
                props.isLoading ? <h1>Loading...</h1> : <h1>Loaded!</h1>
            }
        </div>
    )
}

export default Conditional;