import React, { useState, useEffect } from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  const [chartData, setChartData] = useState({
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    datasets: [10, 20, 30, 40, 50], // Hardcoded data for datasets
    xlabel: "xlabel",
    ylabel: "ylabel"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/disease-predict");
        const data = await response.json();
        setChartData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById("myChart2").getContext("2d");

    // Create the chart
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: "Frequency",
            data: chartData.datasets,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }, [chartData]);

  return <canvas id="myChart2"></canvas>;
}
