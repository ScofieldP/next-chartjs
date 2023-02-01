import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // tọa độ x
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
  LineContainer,
  ChartButton,
  ButtonContainer,
} from "@/styles/Chart.styled";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

export default function Chart() {
  const [state, setState] = useState(data);

  return (
    <Container>
      <LineContainer>
        <Line data={state} options={options} />
      </LineContainer>
      <ButtonContainer>
        <ChartButton>Randomize</ChartButton>
        <ChartButton>Add Dataset</ChartButton>
        <ChartButton>Add Data</ChartButton>
        <ChartButton>Remove Dataset</ChartButton>
        <ChartButton>Remove Data</ChartButton>
      </ButtonContainer>
    </Container>
  );
}
