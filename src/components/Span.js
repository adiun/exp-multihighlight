import React from "react";
import Yellow from "./narrative.png";
import Blue from "./md.png";
import styled from "styled-components";

const colors = {
  narrative: `url(${Yellow})`,
  md: `url(${Blue})`,
  ehr: "rgb(231, 76, 60)"
};

const zIndex = {
  narrative: 1,
  md: 2,
  ehr: 3
};

const size = {
  narrative: "20px 23px",
  md: "20px 21px",
  ehr: "0 0"
};

const backgroundColor = {
  md: "rgb(52, 152, 219);"
};

const border = {
  /*md: "3px solid rgb(52, 152, 219);"*/
};

const boxShadow = {
  narrative: "0 3px 0 0 rgb(241, 196, 15);",
  md: "0 3px 0 0 rgb(52, 152, 219);"
};

const Span = (props) => {
  switch (props.variant) {
    case 'underline-except-first':
      return <SpanUnderlineExceptFirst { ...props } />
    case 'underline':
      return <SpanUnderline { ...props } />
  }
}

const SpanUnderline = styled.span`
  box-shadow: ${props => boxShadow[props.type]};
`;

const SpanUnderlineExceptFirst = styled.span`
  background-color: ${props => backgroundColor[props.type]};
  box-shadow: ${props => boxShadow[props.type]};
`;

export default Span;

