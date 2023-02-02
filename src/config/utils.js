import colorLib from "@kurkle/color";
import { DateTime } from "luxon";
import "chartjs-adapter-luxon";
import { valueOrDefault } from "chart.js/helpers";

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
var _seed = Date.now();
export function srand(seed) {
  _seed = seed;
}

export function rand(min, max) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

export function numbers(config) {
  // console.log(config);

  var cfg = config || {};
  var min = valueOrDefault(cfg.min, 0.9);
  var max = valueOrDefault(cfg.max, 1);
  var from = valueOrDefault(cfg.from, []);
  var count = valueOrDefault(cfg.count, 8);
  var decimals = valueOrDefault(cfg.decimals, 8);
  var continuity = valueOrDefault(cfg.continuity, 1);
  var dfactor = Math.pow(10, decimals) || 0;
  var data = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + rand(min, max);
    if (rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

export function labels(config) {
  var cfg = config || {};
  var min = cfg.min || 0;
  var max = cfg.max || 100;
  var count = cfg.count || 8;
  var step = (max - min) / count;
  var decimals = cfg.decimals || 8;
  var dfactor = Math.pow(10, decimals) || 0;
  var prefix = cfg.prefix || "";
  var values = [];
  var i;

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const DAYS = [
  newDateStrings(0),
  newDateStrings(5),
  newDateStrings(10),
  newDateStrings(15),
  newDateStrings(20),
];
// console.log(DAYS[4]);
export function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

export function days(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];

  for (var i = 0; i < count; ++i) {
    values.push(newDateString(i));
    console.log("re-render");
  }

  return values;
}

export const COLORS = [
  "#4dc9f6",
  "#f67019",
  "#f53794",
  "#537bc4",
  "#acc236",
  "#166a8f",
  "#00a950",
  "#58595b",
  "#8549ba",
];

export function color(index) {
  return COLORS[index % COLORS.length];
}

export function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

export const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "#E87722",
  yellow: "#FED141",
  green: "#6ECEB2",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

export const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

export function namedColor(index) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

export function newDate(days) {
  const date = DateTime.now().plus({ days }).toJSDate();
  // console.log(typeof date);
  return date;
}
const dates = newDate(1);
// console.log(dates.toISOString());

export function newDateString(days) {
  return DateTime.local(2020, 8, 1, 17, 36).plus({ days }).toISODate();
}

export function newDateStrings(days) {
  return DateTime.local(2020, 7, 15, 17, 36).plus({ days }).toISODate();
}
export function parseISODate(str) {
  return DateTime.fromISO(str);
}
