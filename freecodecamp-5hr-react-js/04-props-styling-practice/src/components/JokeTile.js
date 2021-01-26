import React from 'react';

import Joke from './Joke';

const JokeTile = (props) => {
    return (
        <section className="section">
            <div className="tile is-ancestor is-vertical">
                { props.jokes.map((value) => {
                    return <Joke joke={value}></Joke>
                })}
            </div>
        </section>
    );
}

export default JokeTile;