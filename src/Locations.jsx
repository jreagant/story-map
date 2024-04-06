import React from 'react';

import getCurrentLocation from './lib/getCurrentLocation';
import getNearbyLocations from './lib/getNearbyLocations';
import generateMap from './lib/generateMap';

import LocationItem from './LocationItem';

import { Grid, Row, Col } from './containers/flex';
import { LogoImage } from './styled/image';
import { AppTitle, AppSlogan } from './styled/text';
import { MapContainer, LocationMap } from './containers/map';
import logo from './assets/story-map.png';

const { useState, useEffect } = React;

// eslint-disable-next-line react/prop-types
function Locations({ onLocationClick }) {
  const [location, setLocation] = useState({
    latitude: 40.7971153,
    longitude: -73.9584008,
    error: null,
  });
  const [nearbyList, setNearbyList] = useState([]);

  useEffect(() => {
    // const fetchLocation = async () => {
    //   const loc = await getCurrentLocation(location);
    //   setLocation(loc);
    // };

    // fetchLocation();
  }, []);

  useEffect(() => {
    const fetchNearbyLocations = async () => {
      if (location.latitude !== null && location.longitude !== null) {
        const nearbyLocations = await getNearbyLocations(location);
        setNearbyList(nearbyLocations.places);
      }
    };

    fetchNearbyLocations();
  }, [location]);

  useEffect(() => {
    if (nearbyList.length > 0) { generateMap(location, nearbyList); }
  }, [nearbyList]);

  let placeNumber = 0;

  return (
    <Grid>
      <Row>
        <LogoImage src={logo} alt="Story Map - History Near You" />
        <Col>
          <AppTitle>Story Map</AppTitle>
          <AppSlogan>History near you</AppSlogan>
        </Col>
      </Row>
      <MapContainer>
        <LocationMap id="map" />
      </MapContainer>
      <Row>
        {nearbyList.length > 0 && nearbyList.map((place) => {
          placeNumber += 1;
          return (
            <LocationItem
              item={placeNumber}
              key={place.id}
              place={place}
              onLocationClick={onLocationClick}
            />
          );
        })}
      </Row>
    </Grid>
  );
}

export default Locations;
