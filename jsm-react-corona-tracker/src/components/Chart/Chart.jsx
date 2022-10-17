import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

import styles from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

function Chart({ data: { confirmed, deaths, recovered }, country }) {
  const [dailyData, setDailyData] = useState([]);
  console.log(confirmed, deaths, recovered);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchData();
  }, []);

  // <Line data={{ labels: "", datasets: [{}, {}] }} />
  console.log(dailyData.map(({ date }) => date));

  const LineChart =
    dailyData && dailyData.length > 0 ? (
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "X",
            },
          },
        }}
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              label: "Infected",
              data: dailyData.map(({ confirmed }) => confirmed),
              borderColor: "#3333ff",
              fill: true,
            },
            {
              label: "Deaths",
              data: dailyData.map(({ deaths }) => deaths),
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0, 255, 0.5)",
              "rgba(0,255, 0, 0.5)",
              "rgba(255,0, 0, 0.5)",
            ],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : LineChart}</div>
  );
}

export default Chart;
