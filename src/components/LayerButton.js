import React from "react";
import styled, { keyframes } from "styled-components";
import LayersImage from "./layers2.png";

class LayerButton extends React.Component {
  render() {
    return (
      <Layout>
        <ButtonContainerMain>
          <ButtonCaption />
          <Button onClick={this.props.onClickMainBtn}>
            <img src={LayersImage} alt="layers" height="30" />
          </Button>
        </ButtonContainerMain>
        <ButtonContainer isExpanded={this.props.expanded}>
          <ButtonCaption>MD</ButtonCaption>
          <Button>
            <Square color="rgb(52, 152, 219)" />
          </Button>
        </ButtonContainer>
        <ButtonContainer
          animationDelay="100ms"
          isExpanded={this.props.expanded}
        >
          <ButtonCaption>Narrative</ButtonCaption>
          <Button>
            <Square color="rgb(241, 196, 15)" />
          </Button>
        </ButtonContainer>
        <ButtonContainer
          animationDelay="200ms"
          isExpanded={this.props.expanded}
        >
          <ButtonCaption>EHR</ButtonCaption>
          <Button>
            <Square color="rgb(231, 76, 60)" />
          </Button>
        </ButtonContainer>
      </Layout>
    );
  }
}

const Square = styled.div`
  background: ${props => props.color};
  width: 10px;
  height: 10px;
`;

const Layout = styled.div`
  bottom: 30px;
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  right: 30px;
`;

const ButtonCaption = styled.div`
  font-size: 14px;
  justify-self: end;
`;

const Button = styled.div`
  align-items: center;
  background: #fafafa;
  border-radius: 50%;
  box-shadow: 0 5px 10px -2px #ccc;
  cursor: pointer;
  display: grid;
  height: 40px;
  justify-items: center;
  justify-self: center;
  transition: box-shadow 250ms ease-out;
  width: 40px;

  &:hover {
    box-shadow: 0 10px 10px -2px #cacaca;
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
    transform: translateY(0);
    transition: box-shadow 250ms, transform 250ms ease-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export default LayerButton;
