import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 15px 0 20px 0;
`;

export const LocationMap = styled.div`
  height: 300px;
  border-radius: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: inset 0 0 8px #000000;
    pointer-events: none;
  }
`;

export const labelStyle = `
  display: flex;
  flex-direction: row;
  align-items: center;
`;
