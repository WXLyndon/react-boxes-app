import React, { Component } from "react";
import Box from "./Box";

class Boxes extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          style={{ margin: "15px" }}
          className="btn btn-info"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.boxes.map((box) => (
          <Box
            key={box.id}
            box={box}
            onClickLeft={() => {
              this.props.onClickLeft(box);
            }}
            onClickRight={() => {
              this.props.onClickRight(box);
            }}
            onDelete={this.props.onDelete}
          >
            <h3>Box:</h3>
            <p>#{box.id}</p>
          </Box>
        ))}
      </React.Fragment>
    );
  }
}

export default Boxes;
