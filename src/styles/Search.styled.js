import styled from "styled-components";
import { mobile } from "./responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  background-color: #ffffff;
  border-radius: 4px;

  ${mobile({
    flexDirection: "column",
    padding: "0",
    justifyContent: "none",
  })}
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  ${mobile({
    display: "inline-flex",
    flexDirection: "column",
    marginLeft: "0",
    width: "100%",
    marginBottom: "14px",
  })};
`;

export const Select = styled.select`
  color: var(--orange-fs);
  font-size: 16px;
  line-height: 24px;
  width: 236px;
  height: 44px;
  padding-left: 20px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  cursor: pointer;
  ${mobile({
    width: "85vw",
    marginBottom: "14px",
  })}
`;

export const InputContainer = styled.div`
  padding: 0px 20px;
  margin-left: 24px;
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  ${mobile({
    width: "85vw",

    marginLeft: "0",
  })}
`;

export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  height: 44px;
  width: 275px;
  color: #e87722;
  border: none;
`;
export const FlexIcon = styled.div`
  display: inline-flex;
  align-items: center;
  ${mobile({
    left: "130px",
    top: "160px",
    marginTop: "24px",
  })}
`;

export const StyledButton = styled.button`
  color: #ffffff;
  line-height: 24px;
  font-size: 14px;
  background-color: #e87722;
  padding: 10px 35px;
  border: none;
  border-radius: 4px;
  margin-left: 24px;
  cursor: pointer;
  text-transform: uppercase;
  ${mobile({
    width: "85vw",
    marginLeft: "0",
    marginTop: "14px",
  })}
`;
