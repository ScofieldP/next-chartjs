import React, { useState, useEffect } from "react";
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
import { data, options } from "@/config/source";
import {
  Container,
  ChartButton,
  ButtonContainer,
  LineContainer,
} from "@/styles/Chart.styled";

import {
  numbers,
  namedColor,
  transparentize,
  months,
  days,
  rand,
  newDate,
} from "@/config/utils";
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
      state.labels = months({ count: state.labels.length + 1 });

      // for (let index = 0; index < data.datasets.length; ++index) {
      //   state.datasets[index].data.push(rand(0.9, 1));
      // }
      state.datasets.forEach((dataset) => {
        dataset.data.push(rand(0.9, 1));
      });
    }
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
        <Line data={state} options={options} width={1000} height={500} />
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
