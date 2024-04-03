import React from 'react';

import { Row } from './containers/flex';
import { Expand } from './styled/text';

const { useState } = React;

const Description = ({ description }) => {
  const [showFull, setShowFull] = useState(false);

  const paragraphs = description.split('\n');
  const splitParagraphs = paragraphs.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const firstParagraph = (
    <>
      <p>
        {paragraphs[0]}.. <Expand onClick={() => setShowFull(true)} >Read more</Expand>
      </p>
    </>
  );

  return (
    <Row>
      { showFull ? splitParagraphs : firstParagraph }
      { showFull ? <Expand onClick={() => setShowFull(false)} >Show Less</Expand> : <></> }
    </Row>
  );
};

export default Description;