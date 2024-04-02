import React from 'react';

import { Row, Col, AudioCol } from './containers/flex';
import { AudioThumb } from './styled/image';

///
const samplePodImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png';
///

const AudioItem = () => {
  return (
    <Row>
      <AudioCol>
        <AudioThumb src={samplePodImg} />
      </AudioCol>
      <Col>
        <Row>
          <h5>Podcast Title</h5>
        </Row>
        <Row>
          <p>Podcast Description...</p>
        </Row>
      </Col>
      <Col>

      </Col>
    </Row>
  );
};

export default AudioItem;