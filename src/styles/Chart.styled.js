import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 10px;
  padding: 19px 20px 20px 31px;
`;

export const LineContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 60vw;
  left: 20px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px;
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
