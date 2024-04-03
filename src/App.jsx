import React from 'react';

import { GlobalStyle } from './styled/global';
import { Grid, Row, ImgRow, Col } from './containers/flex';
import { LocationHero } from './styled/image';

import Description from './Description';
import AudioList from './AudioList';

import getCurrentLocation from './lib/getCurrentLocation';
import fetchLocationData from './lib/fetchLocationData';
import fetchLocationDescriptions from './lib/fetchLocationDescriptions';

const { useEffect, useState } = React;

///
const sampleImg = 'https://www.masonrymagazine.com/wp-content/uploads/2018/01/MCAA_CATHEDRAL_OF_ST_JOHN_THE-DEVINE_015.jpg';
const sampleText = `This is a 250 word summary description of the location and its historical significance. Lorem ipsum doloret ami bababooey reflecto patronum arbuckle van strausberg quimlsy adams buffalo jethro tull garfield reginald veginald otto von bismarck dismantle`;
///

/**
 * TODO
 * Set conditional render for location error
 *
 */

const App = ({ name, address }) => {
  // const [location, setLocation] = useState({
  //   latitude: null,
  //   longitude: null,
  //   error: null,
  // })

  const [locationDesc, setLocationDesc] = useState({
    short: null,
    long: null,
  });

  // useEffect(() => {
  //   setLocation((location) => getLocation(location));
  // }, []);

  // useEffect(() => {
  //   if (location.latitude !== null) {
  //     fetchLocationData(location)
  //       .then(result => setLocationInfo({
  //         name: result.data.name,
  //         shortDesc: result.data.shortDesc,
  //         longDesc: result.data.longDesc,
  //       }))
  //       .catch(error => console.error(error));
  //   }
  // }, [location]);

  useEffect(() => {
    fetchLocationDescriptions(name)
      .then(result => {
        const divided = result.replaceAll('.', '.\n\n');
        console.log(result.data.split('\n')[0]);
        setLocationDesc({
          short: result.data.split('\n')[0],
          long: result.data.split('\n')[1],
        })
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <>
      <GlobalStyle />
      <Grid>
        <ImgRow>
          <LocationHero src={sampleImg} />
        </ImgRow>
        <Row>
          <h1>{name}</h1>
          <h5>{address}</h5>
          <Description summary={locationDesc.short} extended={locationDesc.long} />
        </Row>
        <Row>
          <AudioList />
        </Row>
      </Grid>
    </>
  )
}

export default App;
