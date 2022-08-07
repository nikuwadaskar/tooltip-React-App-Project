import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import gif from "./gif.gif";

function TooltipPositionedExample(props) {
  // fintion is use to capitalize the first letter of prop while using it as text
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  // chacking if anyone pressed button or not
  if (
    props.position === "top" ||
    props.position === "left" ||
    props.position === "bottom" ||
    props.position === "right"
  ) {
    // if yes button is presed then returning the tooltip button
    return (
      <div className="d-flex align-items-center justify-content-center  mystyle">
        {/* using react bootstrap library to create tooltip effect */}
        <OverlayTrigger
          key={props.position}
          placement={props.position}
          overlay={
            // actuale tooltip
            <Tooltip>
              Thanks for hovering ! I'm a tooltip on{" "}
              <strong>{props.position}</strong>.
            </Tooltip>
          }
        >
          {/* actuale button */}
          <Button className="btn-grad my-btn" variant="secondary">
            Hover over me to see tooltip on {capitalize(props.position)}
          </Button>
        </OverlayTrigger>
      </div>
    );
  } else {
    // if button is not pressed then send gif and instruction to press button
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
