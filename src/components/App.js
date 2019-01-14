import React from "react";
import styled from "styled-components";
import { Note } from "./Note";
import LayerButton from "./LayerButton";
import Span from "./Span";
import { SpanContext, defaultSpanTheme } from "../context";

const variant = "underline-except-first";

export class App extends React.Component {
  state = {
    expandedLayerButton: false,
    spanTheme: defaultSpanTheme
  };

  render() {
    return (
      <AppLayout>
        <SpanContext.Provider value={this.state.spanTheme}>
          <Note>
            <h3>History of Present Illness</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
              </li>
              <li>
                <Span variant={variant} type={"narrative"}>
                  Sed cursus ante.{" "}
                  <Span variant={variant} type={"md"}>
                    Duis sagittis ipsum.
                  </Span>{" "}
                  Dapibus diam.
                </Span>
              </li>
              <li>
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Praesent
                mauris.
              </li>
              <li> Sed dignissim lacinia nunc. Curabitur tortor.</li>
            </ul>
            <h3>Review of Systems</h3>
            <ul>
              <li>
                Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
              </li>
              <li>Maecenas mattis.</li>
              <li>Sed convallis tristique sem.</li>
              <li>Proin ut ligula vel nunc egestas porttitor.</li>
              <li>
                Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                massa.
              </li>
              <li>Fusce ac turpis quis ligula lacinia aliquet.</li>
              <li>Mauris ipsum.</li>
            </ul>
            <h3>Assessment</h3>
            <ul>
              <li>
                Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                nibh.
              </li>
              <li>
                Quisque volutpat condimentum velit. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </li>
            </ul>
            <LayerButton
              onClickMainBtn={this.toggleMainButton}
              onClickLayer={this.toggleLayer}
              expanded={this.state.expandedLayerButton}
            />
          </Note>
          )}
        </SpanContext.Provider>
      </AppLayout>
    );
  }

  toggleLayer = layerName => {
    this.setState(state => ({
      spanTheme: {
        ...state.spanTheme,
        [layerName]: !state.spanTheme[layerName]
      }
    }));
  };

  toggleMainButton = () => {
    this.setState(state => ({
      expandedLayerButton: !state.expandedLayerButton
    }));
  };
}

export const AppLayout = styled.div`
  font-family: "Segoe UI", sans-serif;
  display: grid;
  grid-template-areas: "note";
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
