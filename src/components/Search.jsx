import React from "react";
import {
  Container,
  FlexIcon,
  SelectContainer,
  Select,
  InputContainer,
  StyledInput,
  StyledButton,
} from "@/styles/Search.styled";
import Image from "next/image";
import { data } from "@/config/source";
export default function Search() {
  return (
    <Container>
      <SelectContainer>
        <Select>
          <option value="">Tất cả các quỹ</option>
          {data.datasets?.map((data, index) => (
            <option key={index} value={data.label}>
              {data.label}
            </option>
          ))}
        </Select>
        <InputContainer>
          <StyledInput type="text" value="01/07/2020 - 10/08/2020" readOnly />
          <Image
            src="/img/calendar.png"
            alt="Calendar"
            width="14"
            height="15"
            // style={{ position: "absolute", top: "20px", right: "25.5px" }}
          />
        </InputContainer>
        <StyledButton>Tra cứu</StyledButton>
      </SelectContainer>
      <FlexIcon>
        <Image
          src="/img/chart.png"
          alt="Chart"
          width="30"
          height="30"
          priority
        />
        <Image
          src="/img/calc.png"
          alt="calc"
          width="30"
          height="30"
          style={{ marginLeft: "28px" }}
        />
      </FlexIcon>
    </Container>
  );
}
