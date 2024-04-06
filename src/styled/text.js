import styled from 'styled-components';

export const AppTitle = styled.h1`
  max-height: 100%;
  padding-left: 10px;
  padding-bottom: 0;
  line-height: 1;
  margin-bottom: 0;
  margin-top: 12px;
`;

export const AppSlogan = styled.h5`
  max-height: 100%;
  padding-left: 10px;
  padding-bottom: 0;
  line-height: 1;
  margin-top: 5px;
`;

export const labelTextStyle = `
  font-weight: bold;
  color: black;
  background-color: white;
  padding: 2px 4px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const LocationNumber = styled.h4`
  margin: 10px 0 0 5px;
  line-height: 1;
`;

export const PlaceName = styled.h4`
  white-space: normal;
  overflow-wrap: break-word;
  line-height: 1;
  margin: 10px 5px 0 0;
  padding-bottom: 0;
`;

export const PlaceAddress = styled.p`
  white-space: normal;
  overflow-wrap: break-word;
  margin: 5px 5px 0 0;
  line-height: 1;
  padding-bottom: 0;
`;

export const Expand = styled.a`
  text-decoration: underline;
`;

export const ModalLink = styled.a`
  color: white;
  margin: 0; // Reset margin
  padding: 0; // Reset padding
  border: none; // Remove border
  display: inline-block; // Remove any default block-level styling
  position: absolute;
  right: 0;
`;
