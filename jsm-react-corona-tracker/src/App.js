import React, { Component } from "react";
import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";
import coronaImage from "./images/image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    // fetch the data
    const {
      confirmed: { value: confirmed },
      deaths: { value: deaths },
      recovered: { value: recovered },
    } = await fetchData(country);
    // set the state
    this.setState({ data: { confirmed, deaths, recovered }, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Corona logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
