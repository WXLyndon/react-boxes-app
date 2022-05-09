import React, { Component } from "react";
import Box from "./Box";

class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, x: 0 },
      { id: 2, x: 10 },
      { id: 3, x: 20 },
      { id: 4, x: 30 },
    ],
  };

  handleClickLeft = (box) => {
    const boxes = [...this.state.boxes];
    const boxIndex = boxes.indexOf(box);
    boxes[boxIndex].x -= 10;
    this.setState({ boxes });
  };

  handleClickRight = (box) => {
    const boxes = [...this.state.boxes];
    const boxIndex = boxes.indexOf(box);
    boxes[boxIndex].x += 10;
    this.setState({ boxes });
  };

  handleDelete = (id) => {
    const boxes = this.state.boxes.filter((box) => box.id !== id);
    this.setState({ boxes });
  };

  handleReset = () => {
    const boxes = this.state.boxes.map((b) => {
      return { id: b.id, x: 0 };
    });
    this.setState({ boxes });
  };

  render() {
    return (
      <React.Fragment>
        <button
          style={{ margin: "15px" }}
          className="btn btn-info"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            box={box}
            onClickLeft={() => {
              this.handleClickLeft(box);
            }}
            onClickRight={() => {
              this.handleClickRight(box);
            }}
            onDelete={this.handleDelete}
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
