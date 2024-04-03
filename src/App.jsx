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

  const sampleDesc = `The Cathedral of St. John the Divine, located in Morningside Heights, Manhattan, has a long and complex history that spans over a century of architectural planning, design, and construction efforts. Initially, the site for the cathedral was the Leake and Watts Orphan Asylum, purchased in the early 19th century. As the Episcopal Diocese of New York grew rapidly, Bishop John Henry Hobart first proposed the construction of a grand cathedral in the early 19th century, but his plans were postponed due to various political and social issues.

  It wasn't until 1873 that a cathedral board of trustees was established, and several sites were considered before settling on the current location. However, financial difficulties and disagreements over the cathedral's design delayed construction. An architecture competition was held in the late 19th century, attracting numerous designs. Eventually, the design by the architectural firm of Heins & LaFarge, with a Byzantine-Romanesque style, was selected as the winning entry.

  Construction began with the laying of the cornerstone in 1892, but progress was slow due to financial constraints, changes in architectural plans, and world events such as World War I. In the early 20th century, the design direction shifted towards a Gothic style under the supervision of Ralph Adams Cram, who took over after the death of George L. Heins. Cram's vision was partially realized, with significant portions of the cathedral completed by the mid-20th century.

  Throughout its history, the cathedral has faced various challenges, including fires and financial difficulties, which have left it partially unfinished. Despite these setbacks, St. John the Divine remains an iconic structure, known as the largest cathedral in the world by some measures. Its history reflects the changing architectural styles, financial challenges, and the complex relationship between religion, community, and the arts in New York City.`

  const [locationDesc, setLocationDesc] = useState(sampleDesc);

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

  // useEffect(() => {
  //   fetchLocationDescriptions(name)
  //     .then(result => {
  //       console.log(result.data);
  //       setLocationDesc(result.data);
  //     })
  //     .catch(error => console.log(error));
  // }, [])

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
          <Description description={locationDesc} />
        </Row>
        <Row>
          <AudioList />
        </Row>
      </Grid>
    </>
  )
}

export default App;
