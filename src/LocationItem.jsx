/* eslint-disable react/prop-types */
import React from 'react';

import {
  LocationCountCol,
  LocationItemRow,
  LocationItemCol,
  ReadButtonCol,
} from './containers/flex';
import { LocationNumber, PlaceName, PlaceAddress } from './styled/text';
import { ReadButton } from './styled/button';

function LocationItem({ item, place, onLocationClick }) {
  const placeName = place.displayName.text;
  const placeAddress = place.shortFormattedAddress;

  return (
    <LocationItemRow key={place.id}>
      <LocationCountCol>
        <LocationNumber>{`${item}.`}</LocationNumber>
      </LocationCountCol>
      <LocationItemCol>
        <PlaceName>{place.displayName ? placeName : ''}</PlaceName>
        <PlaceAddress>
          {place.shortFormattedAddress ? placeAddress : ''}
        </PlaceAddress>
      </LocationItemCol>
      <ReadButtonCol>
        <ReadButton
          type="button"
          onClick={() => onLocationClick({
            name: placeName,
            address: placeAddress,
            photo: place.photos[0].name,
          })}
        />
      </ReadButtonCol>
    </LocationItemRow>
  );
}

export default LocationItem;
