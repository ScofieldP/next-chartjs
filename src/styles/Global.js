import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: "FWDCircularVietTT";
  src: url('/fonts/FWDCircularVietTT/FWDCircularVietTT-Medium.ttf');
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "FWDCircularVietTT";
  }
  :root {
    --orange-fs: #e87722;
  }
  
`;
