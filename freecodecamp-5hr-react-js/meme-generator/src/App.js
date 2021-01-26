import React from 'react';

import Header from './component/Header'
import MemeGenerator from './component/MemeGenerator'

import './App.css';

const App = () => {
    return(
        <div>
            <Header></Header>
            <MemeGenerator></MemeGenerator>
        </div>
    );
}

export default App;