import styled from 'styled-components';

import readIcon from '../assets/story-map-read.png';
import closeIcon from '../assets/closeIcon.png';

export const ReadButton = styled.button`
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

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 2em;
  width: 30px;
  height: 30px;
  cursor: pointer;
  outline: none;
`;
