# COVID-19 Tracker - React JS (Hooks, Material UI, Chart js)

Inicializa una applicación de react vacia en el directorio en el cual me encuentro actualmente.

> npx create-react-app ./

1. Delete the src directory

2. Create

src
index.js
App.js

El contenido del index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

El contenido del App.js

```js
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}
```

## Dependencies

1. axios para las llamadas a apis
2. react-chartjs-2 para crear los charts
3. react-countup para hacer la animación de que los números cambian
4. classnames para unir classnames de forma condicional
5. material-ui para la ui

> npm install --save axios react-chartjs-2 react-countup classnames @material-ui/core chart.js

# Estructura de directorios

- src
  - components
    - Cards
      - Card.jsx
      - Cards.module.css
    - Chart
      - Chart.jsx
      - Chart.module.css
    - CountryPicker
      - CountryPicker.jsx
      - CountryPicker.module.css
