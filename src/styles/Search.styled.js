import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
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
`;
// export const StyledOption = styled.option`
//   margin-left: 10px;
// `;

export const InputContainer = styled.div`
  padding: 0px 20px;
  margin-left: 24px;
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
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
`;
