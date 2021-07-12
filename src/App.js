import React, { useState } from 'react';
import './App.css';
import ReactMapGL, { Marker } from "react-map-gl"
import Pin from './pin';
import AddUserButton from './AddUserButton';
import SetDestinationButton from './SetDestinationButton'

var Menu = require("./User.js");

function App() {
  const [viewport, setViewport] = useState(
    {
      latitude: 32.715736,
      longitude: -117.161087,
      zoom: 10,
      width: "100vw",
      height: "100vh"
    });

  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  const [destination, setDestination] = useState();

  return (
    <div className="App">

      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}>

        <AddUserButton addUser={addUser}></AddUserButton>
        
        <SetDestinationButton setDestination={setDestination}></SetDestinationButton>

        {users.map(function (user, name) {
          return <Marker
            key={name}
            longitude={user.location["center"][0]}
            latitude={user.location["center"][1]}>
            <Pin size={20} />
          </Marker>
        })}

        {destination != undefined && <Marker
          key="destination"
          longitude={destination["center"][0]}
          latitude={destination["center"][1]}>
            <Pin size={50}/>
        </Marker>}


      </ReactMapGL>
    </div>
  );
}

export default App;
