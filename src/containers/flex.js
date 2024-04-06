import styled from 'styled-components';

export const Grid = styled.div`
  max-width: 100%;
  padding: 10px;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  grid-gap: 10px;
  max-width: 100%;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const LocationItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

export const HeroRow = styled(Row)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const ImgRow = styled(Row)`
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const Col = styled.div``;

export const LocationItemCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 10px;
  margin-right: 5px;
`;

export const LocationCountCol = styled(Col)`
  display: flex;
  align-items: flex-start;
`;

export const ReadButtonCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 5px 0 0;
`;

export const ImgCol = styled(Col)`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
`;
