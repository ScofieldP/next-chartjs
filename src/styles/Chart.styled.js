import styled from "styled-components";
import { mobile } from "./responsive";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 10px;
  padding: 19px 20px 20px 31px;

  ${mobile({
    marginTop: "24px",
    padding: "0",
    // width: "95%",
    // height: "365px",
    // margin: "0",
  })}
`;

export const LineContainer = styled.div`
  position: relative;
  ${mobile({
    padding: "0",
    width: "90vw",

    // width: "95%",
    // height: "365px",
    // margin: "0",
  })};
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  ${mobile({
    margin: 0,
  })}
`;
export const ChartButton = styled.button`
  margin: 16px 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  transition: background 0.25s, border-color 0.25s;
  background: rgba(40, 44, 52, 0.05);
  border: 1px solid transparent;
  border-radius: 6px;
  color: #3080d0;
  text-decoration: none !important;
  display: inline-block;
  font-size: 0.8rem;
  padding: 8px 16px;
  margin: 0 8px 8px 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  &:hover {
    background: rgba(48, 128, 208, 0.15);
    border-color: rgba(48, 128, 208, 0.2);
    color: #3080d0;
  }

  &:active {
    background: rgba(48, 128, 208, 0.3);
    border-color: rgba(48, 128, 208, 0.4);
    color: #3080d0;
  }
`;

export const TooltipContainer = styled.div`
  width: 160px;
  height: 30px;
  border-radius: 4px 4px 0px 0px;
`;

export const TooltipDate = styled.p`
  background-color: #0a3b32;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TooltipValue = styled.p`
  background-color: #ffffff;
  color: #0a3b32;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
