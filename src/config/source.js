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
      borderColor: CHART_COLORS.red,
      backgroundColor: transparentize(CHART_COLORS.red, 0.5),
    },
    {
      label: "Quỹ 2",
      data: numbers(NUMBER_CFG),
      borderColor: CHART_COLORS.blue,
      backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
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
      // position: window.innerWidth > 470 ? "top" : "bottom",
      // align: window.innerWidth > 470 ? "end" : "center",
      position: "top",
      align: "end",
    },

    maintainAspectRatio: false,
  },
};
