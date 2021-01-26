import React from 'react';

const Joke = (props) => {
  let color = '';
  switch ( Math.floor(Math.random() * (5)) + 1){
    case 1:
      color = 'is-primary';
      break;
    case 2:
      color = 'is-link';
      break;
    case 3:
      color = 'is-info';
      break;
    case 4:
      color = 'is-success';
      break;
    case 5:
      color = 'is-warning';
      break;
    case 6:
      color = 'is-danger';
      break;
  }
    return (
      <div className="tile is-parent">
        <article className={`tile is-child notification ${color}`}>
            <p className="subtitle">{props.joke.question}</p>
            <p className="title">{props.joke.punchline}</p>
        </article>
      </div>
    );
}

export default Joke;