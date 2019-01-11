import React from "react";
import LayersImage from "./layers.png";
import "./layerButton.css";

class LayerButton extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="btn-container main">
          <div className="btn-caption" />
          <div className="btn main" onClick={this.props.onClickMainBtn}>
            <img src={LayersImage} alt="layers" height="30" />
          </div>
        </div>
        {this.props.expanded && (
          <>
            <div className="btn-container">
              <div className="btn-caption">Entities</div>
              <div className="btn second">
                <div className="square yellow" />
              </div>
            </div>
            <div className="btn-container delay-1">
              <div className="btn-caption">Low Confidence</div>
              <div className="btn second">
                <div className="square blue" />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default LayerButton;
