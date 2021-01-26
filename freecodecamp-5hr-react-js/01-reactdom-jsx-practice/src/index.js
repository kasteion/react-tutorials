import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class MyComponent extends React.Component {
    render(){
        return <div><h1>Hello World!</h1><p>This is a paragraph!</p></div>;
    }
}

function MyApp(){
    return (
        <div>
            <h1>ReactDOM & JSX Practice</h1>
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyApp/>, 
document.getElementById('root'));