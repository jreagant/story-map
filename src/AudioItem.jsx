import React from 'react';

import {
  Row,
  Col,
  AudioCol,
  AudioTextCol,
  AudioItemRow } from './containers/flex';
import { AudioThumb } from './styled/image';
import { AudioTitle, AudioDesc } from './styled/text';

///
const samplePodImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png';
///

const AudioItem = () => {
  return (
    <AudioItemRow>
      <AudioCol>
        <AudioThumb src={samplePodImg} />
      </AudioCol>
      <AudioTextCol>
        <Row>
          <AudioTitle>Podcast Title</AudioTitle>
        </Row>
        <Row>
          <AudioDesc>Podcast Description...</AudioDesc>
        </Row>
      </AudioTextCol>
    </AudioItemRow>
  );
};

export default AudioItem;