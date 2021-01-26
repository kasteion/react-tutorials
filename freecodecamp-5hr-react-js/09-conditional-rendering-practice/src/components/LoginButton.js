import React from 'react';

const LoginButton = (props) => {
    return(
        <button onClick={props.onClick}>
            {
                props.logedIn ? 'Log Out...' : 'Log In...'
            }
        </button>
    )
}

export default LoginButton;