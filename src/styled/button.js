import styled from 'styled-components';

import readIcon from '../assets/story-map-read.png';

const ReadButton = styled.button`
  background: url(${readIcon}) no-repeat center center;
  background-size: cover;
  border: none;
  padding: 0;
  margin: 0 5px 0 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  outline: none;
`;

export default ReadButton;
