import {
  numbers,
  transparentize,
  months,
  CHART_COLORS,
  getDates,
  days,
  DAYS,
  newDateStrings,
  newDateString,
} from "./utils.js";
import { useState } from "react";

export const DATA_COUNT = 5;
export const NUMBER_CFG = {
  count: DATA_COUNT,
  min: 0.9,
  max: 1,
};

// export const labels = [
//   "2020-07-01",
//   "2020-07-11",
//   "2020-07-21",
//   "2020-07-31",
//   "2020-08-10",
// ];
const newData = [];
let date = Date.parse("2020-07-01");
for (let day = 1; day <= 31; day++) {
  date = new Date(date);
  date.setDate(day);
  newData.push({
    x: date,
    // y: Math.floor(Math.random() * 6 + 1),
  });
}
const maxTicksLimit = 5;
function createLabels() {
  const days = newData.map((o) => o.x);
  // console.log(days);
  const startTime = days[0];
  const endTime = days[days.length - 1];
  const tickGap = newData.length / (maxTicksLimit - 1);
  const labels = [startTime];
  for (let i = 1; i < maxTicksLimit - 1; i++) {
    labels.push(days[Math.floor(i * tickGap)]);
  }
  labels.push(endTime);
  return labels;
}
// export const labels = days({ count: 5 });
// export const labels = DAYS;
export const labels = createLabels();
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

const customTitle = () => {
  var label = "Title";
  return label;
};
const customLabel = (tooltip) => {
  return {
    labelColor: function (context) {
      return {
        borderColor: "rgb(0, 0, 255)",
        backgroundColor: "rgb(255, 0, 0)",
        borderWidth: 2,
        borderDash: [2, 2],
        borderRadius: 2,
      };
    },
  };
};
