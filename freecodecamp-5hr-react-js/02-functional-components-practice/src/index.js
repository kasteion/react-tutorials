import React from 'react';
import ReactDOM from 'react-dom';

import MyInfo from './components/MyInfo'

import './styles.css';

// function MyInfo(){
//     return(
//         <div className="center">
//             <h1>Hi there, this is Fredy from 502!</h1>
//             <p>I must confess i didn't like javascript and didn't think much of it. I've been learning it and... Oh Surprise! It's quite powerful! I'm currently learning React JS by the way.</p>
//             <p>This are the three places i would like to go on vacation/adventure.</p>
//             <ul>
//                 <li>Paris, France</li>
//                 <li>Orlando, Florida</li>
//                 <li>Machu Pichu, Perú</li>
//             </ul>
//         </div>
//     );
// }

ReactDOM.render(<MyInfo/>, document.getElementById('root'));