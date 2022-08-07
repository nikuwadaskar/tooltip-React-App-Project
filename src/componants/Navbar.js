import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div
      
        className= " rounded-0 border-0 btn-group  d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <button
          onClick={() => {
            props.toggleMode("left");
          }}
          type="button"
          className="rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Left
        </button>
        <button
          onClick={() => {
            props.toggleMode("top");
          }}
          type="button"
          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Top
        </button>
        <button
          onClick={() => {
            props.toggleMode("bottom");
          }}
          type="button"
          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Bottom
        </button>
        <button
          onClick={() => {
            props.toggleMode("right");
          }}
          type="button"
          className=" rounded-0 border-0 text-light btn btn-outline-success btn-primary"
        >
          Right
        </button>
      </div>
    </div>
  );
}
