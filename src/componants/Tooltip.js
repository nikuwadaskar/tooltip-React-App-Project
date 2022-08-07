import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import gif from "./gif.gif";

function TooltipPositionedExample(props) {
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  if (
    props.position === "top" ||
    props.position === "left" ||
    props.position === "bottom" ||
    props.position === "right"
  ) {
    return (
      <div className="d-flex align-items-center justify-content-center  mystyle">
        <OverlayTrigger
          key={props.position}
          placement={props.position}
          overlay={
            <Tooltip>
              Thanks for hovering ! I'm a tooltip on{" "}
              <strong>{props.position}</strong>.
            </Tooltip>
          }
        >
          <Button className="btn-grad my-btn" variant="secondary">
            Hover over me to see tooltip on {capitalize(props.position)}
          </Button>
        </OverlayTrigger>
      </div>
    );
  } else {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center flex-column  mystyle">
          <h1 style={{ Color: "White" }}>Select some direction first</h1>
          <img src={gif} alt="🤦‍♂️" />
        </div>
      </>
    );
  }
}

export default TooltipPositionedExample;
