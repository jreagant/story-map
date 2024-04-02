import React from 'react';

import { AudioListGrid, Row } from './containers/flex';

import AudioItem from './AudioItem';

const AudioList = () => {
  return (
    <AudioListGrid>
      <h3>Listen and learn</h3>
      <AudioItem />
      <AudioItem />
      <AudioItem />
    </AudioListGrid>
  )
}

export default AudioList;