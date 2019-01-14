import React from "react";
import styled from "styled-components";
import { SpanContext } from "../context";

const colors = {
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

const Span = props => {
  return (
    <SpanContext.Consumer>
      {spanTheme => {
        switch (props.variant) {
          case "underline-except-first":
            return (
              <SpanUnderlineExceptFirst
                enabled={spanTheme[props.type]}
                {...props}
              />
            );
          case "underline":
            return <SpanUnderline enabled={spanTheme[props.type]} {...props} />;
          default:
            return null;
        }
      }}
    </SpanContext.Consumer>
  );
};

const SpanUnderline = styled.span`
  ${props =>
    props.enabled
      ? `
  box-shadow: ${boxShadow[props.type]};
  `
      : ""}
`;

const SpanUnderlineExceptFirst = styled.span`
  ${props =>
    props.enabled
      ? `
  background-color: ${backgroundColor[props.type]};
  box-shadow: ${boxShadow[props.type]};
`
      : ""}
`;

export default Span;
