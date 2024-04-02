import React from 'react';

import { GlobalStyle } from './styled/global';
import { Grid, Row, ImgRow, Col } from './containers/flex';
import { LocationHero } from './styled/image';

import Description from './Description';
import AudioList from './AudioList';

///
const sampleImg = 'https://www.masonrymagazine.com/wp-content/uploads/2018/01/MCAA_CATHEDRAL_OF_ST_JOHN_THE-DEVINE_015.jpg';
const sampleName = "The Cathedral Church of St. John the Divine";
const sampleAddress = '1047 Amsterdam Ave';
const sampleText = `This is a 250 word summary description of the location and its historical significance. Lorem ipsum doloret ami bababooey reflecto patronum arbuckle van strausberg quimlsy adams buffalo jethro tull garfield reginald veginald otto von bismarck dismantle`;
///

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <ImgRow>
          <LocationHero src={sampleImg} />
        </ImgRow>
        <Row>
          <h1>{sampleName}</h1>
          <h5>{sampleAddress}</h5>
          <Description summary={sampleText} />
        </Row>
        <Row>
          <AudioList />
        </Row>
      </Grid>
    </>
  )
}

export default App;
