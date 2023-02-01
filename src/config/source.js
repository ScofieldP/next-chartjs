import { numbers, transparentize, months, CHART_COLORS } from "./utils.js";

export const DATA_COUNT = 7;
export const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

export const labels = months({ count: 7 });
export const data = {
  labels: labels,
  datasets: [
    {
      label: "Quỹ 1",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.orange,
      backgroundColor: transparentize(CHART_COLORS.orange, 0.5),
    },
    {
      label: "Quỹ 2",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.green,
      backgroundColor: transparentize(CHART_COLORS.green, 0.5),
    },
    {
      label: "Quỹ 3",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.yellow,
      backgroundColor: transparentize(CHART_COLORS.yellow, 0.5),
    },
  ],
};

export const options = {
  // responsive: true,
  data: data,
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: "rect",
      },
      tooltip: {
        callbacks: {
          labelColor: function (context) {
            return {
              borderColor: "rgb(0, 0, 255)",
              backgroundColor: "rgb(255, 0, 0)",
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 2,
            };
          },
          labelTextColor: function (context) {
            return "#543453";
          },
        },
      },
      // position: window.innerWidth > 470 ? "top" : "bottom",
      // align: window.innerWidth > 470 ? "end" : "center",
      position: "top",
      align: "end",
    },

    maintainAspectRatio: false,
  },
};
