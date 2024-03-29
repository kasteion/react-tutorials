import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const transformedCountries = countries.map((country) => country.name);
    return transformedCountries;
  } catch (error) {
    console.log(error);
  }
};

export { fetchData, fetchDailyData, fetchCountries };
