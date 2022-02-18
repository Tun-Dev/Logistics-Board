import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import styles from "./charts.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 2.0, ease: "easeInOut" },
  },
};

const Charts2 = () => {
  let delayed;

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Oct 22",
        "Oct 23",
        "Oct 24",
        "Oct 25",
        "Oct 25",
        "Oct 26",
        "Oct 27",
        "Oct 28",
        "Oct 29",
      ],
      datasets: [
        {
          label: "Shipments",
          data: [10000, 15000, 12000, 23000, 58000, 55000, 32000, 44000, 38000],
          fill: true,
          borderColor: "rgba(44, 217, 197)",
          backgroundColor: "rgba(44, 217, 197)",
          tension: 0.05,
        },
        {
          label: "Vehicles",
          data: [2000, 5000, 9000, 8000, 22000, 38000, 9000, 10500, 30000],
          fill: "start",
          borderColor: "#6672FB",
          backgroundColor: "#6672FB",
          tension: 0.05,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legends: {
          position: "top",
        },
        title: {
          display: false,
          text: "Shipments",
        },
        filler: {
          propagate: false,
        },
      },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 700 + context.datasetIndex * 500;
          }
          return delay;
        },
      },
      interaction: {
        intersect: false,
      },
    });
  }, []);

  return (
    <motion.div
      variants={chartMotion}
      initial="hidden"
      animate="visible"
      className={styles.chart}
    >
      <div className={styles.words}>
        <div>
          <p>SHIPMENTS</p>
          <h1>23,360,000</h1>
        </div>
        <div>
          <p>ACTIVE VEHICLES</p>
          <h1>4,237,889</h1>
        </div>
      </div>
      <Line options={chartOptions} data={chartData} />
    </motion.div>
  );
};

export default Charts2;
