import React from 'react';

import { Grid, Row } from './containers/flex';

import AudioItem from './AudioItem';

const AudioList = () => {
  return (
    <Grid>
      <h3>Listen and learn</h3>
      <AudioItem />
      <AudioItem />
      <AudioItem />
    </Grid>
  )
}

export default AudioList;