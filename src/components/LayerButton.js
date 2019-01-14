import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../colors";
import { SpanContext } from "../context";

class LayerButton extends React.Component {
  render() {
    return (
      <Layout isExpanded={this.props.expanded}>
        <ButtonContainerMain>
          <ButtonCaption />
          <Button onClick={this.props.onClickMainBtn}>
            <LayersImage spanTheme={this.props.spanTheme} />
          </Button>
        </ButtonContainerMain>
      
        <ButtonContainer
          isExpanded={this.props.expanded}
          onClick={() => this.props.onClickLayer("ehr")}
        >
          <ButtonCaption>EHR</ButtonCaption>
          <Button color={Colors.ehr}>
            <SpanContext.Consumer>
              {spanTheme => (
                <Square color={Colors.ehr} isExpanded={spanTheme["ehr"]} />
              )}
            </SpanContext.Consumer>
          </Button>
        </ButtonContainer>
        <ButtonContainer
          animationDelay="100ms"
          isExpanded={this.props.expanded}
          onClick={() => this.props.onClickLayer("md")}
        >
          <ButtonCaption>MD</ButtonCaption>
          <Button color={Colors.md}>
            <SpanContext.Consumer>
              {spanTheme => (
                <Square color={Colors.md} isExpanded={spanTheme["md"]} />
              )}
            </SpanContext.Consumer>
          </Button>
        </ButtonContainer>
        <ButtonContainer
          animationDelay="200ms"
          isExpanded={this.props.expanded}
          onClick={() => this.props.onClickLayer("narrative")}
        >
          <ButtonCaption>Narrative</ButtonCaption>
          <Button color={Colors.narrative}>
            <SpanContext.Consumer>
              {spanTheme => (
                <Square
                  color={Colors.narrative}
                  isExpanded={spanTheme["narrative"]}
                />
              )}
            </SpanContext.Consumer>
          </Button>
        </ButtonContainer>
      </Layout>
    );
  }
}

const Square = styled.div`
  background: ${props => props.color};
  border-radius: 50%;
  opacity: ${props => (props.isExpanded ? "1" : "0")};
  transform: ${props => (props.isExpanded ? "scale(2.5)" : "none")};
  transition 500ms opacity ease-out, 500ms transform ease-out;
  width: 10px;
  height: 10px;
`;

const Layout = styled.div`
  bottom: 30px;
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 0 0 40px;
  position: fixed;
  right: 30px;

  &::before {
    background: linear-gradient(
      to top left,
      white 0%,
      white 50%,
      transparent 100%
    );
    bottom: 0;
    content: "";
    filter: blur(10px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    opacity: ${props => (props.isExpanded ? "1" : "0")};
    transform: ${props => (props.isExpanded ? "scaleY(1)" : "scaleY(0)")};
    transition: opacity 500ms ease-out, transform 500ms ease-out;
    z-index: -1;
  }
`;

const ButtonCaption = styled.div`
  color: #555;
  font-size: 14px;
  font-weight: 500;
  justify-self: end;
`;

const Button = styled.div`
  align-items: center;
  background: #fafafa;
  border: 1px solid ${props => props.color || "transparent"};
  border-radius: 50%;
  box-shadow: 0 5px 10px -2px #ccc;
  cursor: pointer;
  display: grid;
  height: 40px;
  justify-items: center;
  justify-self: center;
  outline: none;
  overflow: hidden;
  transition: box-shadow 250ms, transform 250ms ease-out;
  width: 40px;

  &:active {
    transform: translateY(1px);
  }

  &:hover {
    border: 1px solid ${props => props.color || "#eee"};
    box-shadow: 0 10px 10px -2px #cacaca;
    transform: translateY(-2px);
  }
`;

const ButtonContainerAppearKeyframes = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const ButtonContainerDisappearKeyframes = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
`;

const ButtonContainer = styled.div`
  align-items: center;
  animation-delay: ${props => props.animationDelay};
  animation-duration: 250ms;
  animation-fill-mode: ${props =>
    props.isExpanded ? "forwards" : "backwards"};
  animation-name: ${props =>
    props.isExpanded
      ? ButtonContainerAppearKeyframes
      : ButtonContainerDisappearKeyframes};
  animation-timing-function: ease-out;
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  display: grid;
  opacity: 0;
  transform: translateY(10px);
  grid-template-columns: 1fr 60px;
  user-select: none;
`;

const ButtonContainerMain = styled(ButtonContainer)`
  animation: none;
  opacity: 1;
  transform: none;

  & > ${Button} {
    background: #fafafa;
    height: 60px;
    width: 60px;
  }
`;

const LayersImage = styled(props => (
  <div className={props.className}>
    <LayerImagePart type="narrative" z={2} ty="-15px" />
    <LayerImagePart type="md" z={1} ty="0px" />
    <LayerImagePart type="ehr" z={0} ty="15px" />
  </div>
))`
  display: grid;
  height: 25px;
  width: 25px;
`;

const LayerImagePart = props => (
  <SpanContext.Consumer>
    {spanTheme => (
      <LayerImagePartContent
        color={spanTheme[props.type] ? Colors[props.type] : Colors.default}
        {...props}
      />
    )}
  </SpanContext.Consumer>
);

const LayerImagePartContent = styled.div`
  box-shadow: 2px 2px 2px 0px #bebebe;
  grid-row: 1 / last-line;
  grid-column: 1 / last-line;
  background-color: ${props => props.color};
  transform: scaleY(0.5) translateY(${props => props.ty}) rotate(45deg);
  transition: background-color 250ms ease-out;
  z-index: ${props => props.z};
`;

export default LayerButton;
