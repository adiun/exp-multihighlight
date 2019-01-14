import React from "react";
import styled from "styled-components";
import { SpanContext } from "../context";
import { Colors } from "../colors";

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
  md: Colors.md
};

const border = {
  /*md: "3px solid rgb(52, 152, 219);"*/
};

const boxShadow = {
  narrative: `0 3px 0 0 ${Colors.narrative};`,
  md: `0 3px 0 0 ${Colors.md};`,
  ehr: `0 3px 0 0 ${Colors.ehr};`
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
  transition: background-color 500ms ease-out, box-shadow 500ms ease-out;
  ${props =>
    props.enabled
      ? `
  background-color: ${backgroundColor[props.type]};
  box-shadow: ${boxShadow[props.type]};
`
      : `
      background-color: inherit;
  box-shadow: none;
`}
`;

export default Span;
