import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div
        // uisng bootstrap classes to design

        className=" rounded-0 border-0 btn-group  d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <button
          // sending back prop to the parent
          onClick={() => {
            props.toggleMode("left");
          }}
          type="button"
          // uisng bootstrap classes to design
          className="rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Left
        </button>
        <button
          // sending back prop to the parent

          onClick={() => {
            props.toggleMode("top");
          }}
          type="button"
          // uisng bootstrap classes to design

          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Top
        </button>
        <button
          // sending back prop to the parent

          onClick={() => {
            props.toggleMode("bottom");
          }}
          type="button"
          // uisng bootstrap classes to design

          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Bottom
        </button>
        <button
          // sending back prop to the parent

          onClick={() => {
            props.toggleMode("right");
          }}
          type="button"
          // uisng bootstrap classes to design

          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Right
        </button>
      </div>
    </div>
  );
}
