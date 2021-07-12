import React, { useState } from 'react';
import './App.css';
import ReactMapGL from "react-map-gl"

function App() {
  const [viewport, setViewport] = useState(
    {
      latitude: 0,
      longitude: 0,
      zoom: 10,
      width: "100vw",
      height: "100vh"

    });

    console.log(process.env.REACT_APP_MAPBOX_API_KEY)

  return (
    <div className="App">
      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}>

      </ReactMapGL>
    </div>
  );
}

export default App;
