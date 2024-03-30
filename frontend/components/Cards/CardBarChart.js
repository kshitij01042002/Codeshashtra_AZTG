import React, { useState, useEffect } from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [65, 59, 80, 81, 56],
    xlabel: "xlabel",
    ylabel: "ylabel",
  });

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById("myChart").getContext("2d");

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
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    
    // Cleanup function to prevent memory leaks
    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return <canvas id="myChart"></canvas>;
}
