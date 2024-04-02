import React from 'react';

import { Row } from './containers/flex';

const Description = ({ summary }) => {
  return (
    <Row>
      <p>
        {summary}... <a>Read more</a>
      </p>
    </Row>
  );
};

export default Description;