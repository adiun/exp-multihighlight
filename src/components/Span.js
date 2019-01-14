import React from "react";
import Yellow from "./yellow.png";
import Blue from "./blue.png";
import styled from "styled-components";

const colors = {
  yellow: `url(${Yellow})`,
  blue: `url(${Blue})`,
  red: "rgb(231, 76, 60)"
};

const zIndex = {
  yellow: 1,
  blue: 2,
  red: 3
};

const size = {
  yellow: "20px 23px",
  blue: "20px 21px",
  red: "0 0"
};

const backgroundColor = {
  blue: "rgb(52, 152, 219);"
};

const border = {
  /*blue: "3px solid rgb(52, 152, 219);"*/
};

const boxShadow = {
  yellow: "0 3px 0 0 rgb(241, 196, 15);",
  blue: "0 3px 0 0 rgb(52, 152, 219);"
};

const Span = styled.span`
  background-color: ${props => backgroundColor[props.type]};
  border-bottom: ${props => border[props.type]};
  box-shadow: ${props => boxShadow[props.type]};
`;

export default Span;
