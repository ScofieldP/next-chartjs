import React from "react";
import { Container, FlexIcon, SelectContainer } from "@/styles/Search.styled";
import Image from "next/image";
export default function Search() {
  return (
    <Container>
      <SelectContainer></SelectContainer>
      <FlexIcon>
        <Image src="/img/chart.png" alt="Chart" width="30" height="30" />
        <Image
          src="/img/calc.png"
          alt="Chart"
          width="30"
          height="30"
          style={{ marginLeft: "28px" }}
        />
      </FlexIcon>
    </Container>
  );
}
