import styled from "styled-components";
import { mobile } from "./responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 77px 0 71px 0;

  ${mobile({
    /* Mobile ver */

    padding: "63px 20px",
  })}
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 400;
  color: #e87722;
  font-size: 26px;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: var(--orange-fs);

  ${mobile({
    fontSize: "20px",
    marginBottom: "15px",
  })}
`;

export const SubTitle = styled.p`
  width: 819px;
  height: 48px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #0a3b32;

  ${mobile({
    width: "335px",
    height: "74px",
    fontSize: "16px",
    lineHeight: "24px",
    // overflow: "hidden",
    textOverflow: "ellipsis",
  })}
`;
