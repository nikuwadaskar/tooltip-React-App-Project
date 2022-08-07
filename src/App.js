import Navbar from "./componants/Navbar";
import Tooltip from "./componants/Tooltip";
import "./index.css";
import { useState } from "react";


function App() {
  const [position ,setPosition]=useState('ntg')
  const toggleMode = (position) => {
    setPosition(position)
  };
  return (
    <>
      <div className="App">
        <Navbar position={position} toggleMode={toggleMode}/>
        <Tooltip position={position}/>
      </div>
    </>
  );
}

export default App;
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Tooltip from 'react-bootstrap/Tooltip';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// export default function App() {
// return (
// 	<div>
// 	<h4>React-Bootstrap Tooltip Component</h4>
// 	<OverlayTrigger
// 		delay={{ hide: 450, show: 300 }}
// 		overlay={(props) => (
// 		<Tooltip {...props}>
// 			Hii, I am a simple tooltip information!!!
// 		</Tooltip>
// 		)}
// 		placement="bottom"
// 	><Button variant="warning">Tooltip Button</Button>
// 	</OverlayTrigger>
// 	</div>
// );
// }
