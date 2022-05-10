import React, { Component } from "react";
import Boxes from "./Boxes";
import Navbar from "./Navbar";

class App extends Component {
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
        <Navbar
          boxesLength={this.state.boxes.filter((b) => b.x !== 0).length}
        />
        <div className="container">
          <Boxes
            boxes={this.state.boxes}
            onClickLeft={this.handleClickLeft}
            onClickRight={this.handleClickRight}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
