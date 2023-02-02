import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // tọa độ x
  TimeScale,
  LinearScale, // tọa độ y
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { data } from "@/config/source";
import {
  Container,
  ChartButton,
  ButtonContainer,
  LineContainer,
  TooltipContainer,
  TooltipDate,
  TooltipValue,
} from "@/styles/Chart.styled";

import {
  numbers,
  namedColor,
  transparentize,
  months,
  days,
  rand,
  newDate,
  newDateString,
} from "@/config/utils";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export default function Chart() {
  const [state, setState] = useState(data);
  const chartRef = useRef(null); //create reference hook
  const [tooltip, setTooltip] = useState({
    opacity: 0,
    top: 0,
    left: 0,
  });
  const [tooltipData, setTooltipData] = useState(null);
  const options = {
    responsive: true,
    normalized: true,
    spanGaps: true,

    data: data,
    scales: {
      x: {
        ticks: {
          source: "labels",
          autoSkip: true,
          maxTicksLimit: 5,
        },
        scaleLabel: {
          display: true,
        },
        type: "time",
        time: {
          displayFormats: {
            day: "dd/MM",
          },
          tooltipFormat: "dd/M/yyyy",

          unit: "day",
        },
      },
      y: {
        min: 0.9,
        max: 1,
        ticks: {
          stepSize: 0.02,
        },
      },
    },

    plugins: {
      legend: false,
      tooltip: {
        enabled: false,
        external: (context) => {
          const tooltipModel = context.tooltip;
          console.log(tooltipModel);
          if (!chartRef || !chartRef.current) return;

          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0)
              setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }
          // const position = context.chart.canvas.getBoundingClientRect();
          const newTooltipData = {
            opacity: 1,
            left: tooltipModel.caretX,
            top: tooltipModel.caretY,
            date: "Ngày:" + " " + tooltipModel.dataPoints[0].label,
            value:
              "Giá trị quỹ:" + " " + tooltipModel.dataPoints[0].formattedValue,
          };
          if (!_.isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData);
        },
      },
    },
  };
  console.log(tooltip);

  const random = () => {
    state.datasets.forEach((dataset) => {
      dataset.data = numbers({
        count: state.labels.length,
        min: 0.9,
        max: 1,
      });
    });
    setState({ ...state, datasets: [...state.datasets] });
  };

  const addDataset = () => {
    const dsColor = namedColor(state.datasets.length);
    const newDataset = {
      label: "Quỹ " + (state.datasets.length + 1),
      backgroundColor: transparentize(dsColor, 0.5),
      borderColor: dsColor,
      data: numbers({ count: state.labels.length, min: 0.9, max: 1 }),
    };
    // state.datasets.push(newDataset);
    // chart.update();
    state.datasets.push(newDataset);
    setState({ ...state, datasets: [...state.datasets] });
  };
  const addData = () => {
    if (state.datasets.length > 0) {
      state.labels = days({
        count: state.labels.length + 1,
      });
      for (let index = 0; index < data.datasets.length; ++index) {
        state.datasets[index].data.push(rand(0.9, 1));
      }
      // new datasets();
      state.datasets.forEach((dataset) => {
        dataset.data.push(rand(0.9, 1));
      });
    }
    // console.log(state);
    // if (state.datasets.length > 0) {
    //   state.labels.push(days({}));

    //   state.datasets.forEach((dataset) => {
    //     dataset.data.push(rand(0.9, 1));
    //   });
    // }

    setState({ ...state, datasets: [...state.datasets] });
  };
  const removeDataset = () => {
    state.datasets.pop();
    setState({ ...state, datasets: [...state.datasets] });
  };
  const removeData = () => {
    state.labels.splice(-1, 1); // remove the label first
    state.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    setState({ ...state, datasets: [...state.datasets] });
  };
  return (
    <Container>
      <LineContainer>
        <Line
          data={state}
          ref={chartRef}
          options={options}
          width={1000}
          height={500}
        />
        <div
          className="tooltip"
          style={{
            top: tooltip.top,
            left: tooltip.left,
            opacity: tooltip.opacity,
            position: "absolute",
          }}
        >
          <TooltipContainer>
            <TooltipDate>{tooltip.date} </TooltipDate>
            <TooltipValue>{tooltip.value} </TooltipValue>
          </TooltipContainer>
        </div>
      </LineContainer>
      <ButtonContainer>
        <ChartButton onClick={random}>Randomize</ChartButton>
        <ChartButton onClick={addDataset}>Add Dataset</ChartButton>
        <ChartButton onClick={addData}>Add Data</ChartButton>
        <ChartButton onClick={removeDataset}>Remove Dataset</ChartButton>
        <ChartButton onClick={removeData}>Remove Data</ChartButton>
      </ButtonContainer>
    </Container>
  );
}
