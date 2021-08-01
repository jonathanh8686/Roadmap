import React, { useEffect, useState } from 'react';
import './App.css';
import MapGL, { Marker } from '@urbica/react-map-gl';
import Pin from './components/pin';
import Sidebar from "./components/Sidebar";
import 'mapbox-gl/dist/mapbox-gl.css';
import './CalculateBest'
import { solve } from './CalculateBest';

const mbxMatrix = require('@mapbox/mapbox-sdk/services/matrix');
const matrixService = mbxMatrix({ accessToken: process.env.REACT_APP_MAPBOX_API_KEY })


function App() {
  const [viewport, setViewport] = useState(
    {
      latitude: 32.715736,
      longitude: -117.161087,
      zoom: 10,
    });

  const [users, setUsers] = useState([]);
  const [destination, setDestination] = useState();
  const [toRemove, setToRemove] = useState(undefined);
  const [bestPermutation, setBestPermutation] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  useEffect(() => {
    if (toRemove !== undefined) {
      setUsers(users.filter(u => u !== toRemove));
      setToRemove(undefined);
    }

    console.log("here")

    // if there are less than 10 people, we can use the traffic request profile, otherwise
    // we have to use the normal driving profile.
    if (users.length > 1) {
      console.log(users);
      matrixService.getMatrix({
        points: 
          users.map((user) => {
            return {coordinates: [user.location.center[0], user.location.center[1]]}
          })
        ,
        profile: 'driving'
      })
        .send()
        .then(response => {
          if(response.body.code === "InvalidInput") {
            console.error(response.body.code.message);
          }
          setBestPermutation(solve(users, response.body));
        });
    }
  }, [users, toRemove]);

  useEffect(() => {
    console.log(bestPermutation)
  }, [bestPermutation]);

  return (
    <div className="App">
      <MapGL {...viewport}
        accessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        style={{ width: '100vw', height: '100vh' }}
        onViewportChange={(viewport) => { setViewport(viewport) }}>

        <Sidebar
          setUsers={setUsers}
          addUser={addUser}
          queueRemove={setToRemove}
          setDestination={setDestination}
          destination={destination}
          users={users}
        ></Sidebar>
        {users.map(function (user, name) {
          return <Marker
            offsetTop={-20} offsetLeft={-10}
            key={name}
            longitude={user.location["center"][0]}
            latitude={user.location["center"][1]}>
            <Pin size={25} color={user.color} driving={user.canDrive} />
          </Marker>
        })}
        {destination !== undefined && <Marker
          offsetTop={-20} offsetLeft={-10}
          key="destination"
          longitude={destination["center"][0]}
          latitude={destination["center"][1]}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path fill="none" d="M 16.85 7.275 l -3.967 -0.577 l -1.773 -3.593 c -0.208 -0.423 -0.639 -0.69 -1.11 -0.69 s -0.902 0.267 -1.11 0.69 L 7.116 6.699 L 3.148 7.275 c -0.466 0.068 -0.854 0.394 -1 0.842 c -0.145 0.448 -0.023 0.941 0.314 1.27 l 2.871 2.799 l -0.677 3.951 c -0.08 0.464 0.112 0.934 0.493 1.211 c 0.217 0.156 0.472 0.236 0.728 0.236 c 0.197 0 0.396 -0.048 0.577 -0.143 l 3.547 -1.864 l 3.548 1.864 c 0.18 0.095 0.381 0.143 0.576 0.143 c 0.256 0 0.512 -0.08 0.729 -0.236 c 0.381 -0.277 0.572 -0.747 0.492 -1.211 l -0.678 -3.951 l 2.871 -2.799 c 0.338 -0.329 0.459 -0.821 0.314 -1.27 C 17.705 7.669 17.316 7.343 16.85 7.275 z"></path>
          </svg>
        </Marker>}


      </MapGL>
    </div>
  );
}

export default App;
