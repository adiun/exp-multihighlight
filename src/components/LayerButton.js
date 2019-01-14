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
        {this.props.expanded && (
          <>
            <ButtonContainer onClick={() => this.props.onClickLayer('md')}>
              <ButtonCaption>MD</ButtonCaption>
              <Button>
                <Square color="rgb(52, 152, 219)" />
              </Button>
            </ButtonContainer>
            <ButtonContainer animationDelay="100ms" onClick={() => this.props.onClickLayer('narrative')}>
              <ButtonCaption>Narrative</ButtonCaption>
              <Button>
                <Square color="rgb(241, 196, 15)" />
              </Button>
            </ButtonContainer>
            <ButtonContainer animationDelay="200ms" onClick={() => this.props.onClickLayer('ehr')}>
              <ButtonCaption>EHR</ButtonCaption>
              <Button>
                <Square color="rgb(231, 76, 60)" />
              </Button>
            </ButtonContainer>
          </>
        )}
      </Layout>
    );
  }
}

const Square = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => props.color};
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;

const ButtonCaption = styled.div`
  font-size: 14px;
  justify-self: end;
`;

const Button = styled.div`
  background: #fafafa;
  box-shadow: 0 5px 10px -2px #ccc;
  border-radius: 50%;
  transition: box-shadow 250ms ease-out;
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  justify-self: center;
  height: 40px;
  width: 40px;

  &:hover {
    box-shadow: 0 10px 10px -2px #cacaca;
  }
`;

const ButtonContainerAppearKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  align-items: center;
  animation-name: ${ButtonContainerAppearKeyframes};
  animation-duration: 250ms;
  animation-timing-function: ease-out;
  animation-delay: ${props => props.animationDelay};
  animation-fill-mode: backwards;

  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

const ButtonContainerMain = styled(ButtonContainer)`
  animation: none;

  & > ${Button} {
    background: #fafafa;
    transform: translateY(0);
    transition: box-shadow 250ms, transform 250ms ease-out;
    height: 60px;
    width: 60px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export default LayerButton;
