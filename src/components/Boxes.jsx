import React, { Component } from "react";
import Box from "./Box";

const Boxes = (props) => {
  return (
    <React.Fragment>
      <button
        style={{ margin: "15px" }}
        className="btn btn-info"
        onClick={props.onReset}
      >
        Reset
      </button>
      {props.boxes.map((box) => (
        <Box
          key={box.id}
          box={box}
          onClickLeft={() => {
            props.onClickLeft(box);
          }}
          onClickRight={() => {
            props.onClickRight(box);
          }}
          onDelete={props.onDelete}
        >
          <h3>Box:</h3>
          <p>#{box.id}</p>
        </Box>
      ))}
    </React.Fragment>
  );
};

export default Boxes;
