/* global google */
import { Loader } from '@googlemaps/js-api-loader';

import { labelIconStyle } from '../styled/image';
import { labelTextStyle } from '../styled/text';
import { labelStyle } from '../containers/map';

const generateMap = async (location, nearbyList) => {
  const loader = new Loader({
    apiKey: process.env.MAPS_TOKEN,
    version: 'weekly',
  });

  const heroPhotos = [];

  await loader.load()
    .then(async () => {
      const { Map } = await google.maps.importLibrary('maps');
      const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

      const map = new Map(document.getElementById('map'), {
        center: { lat: location.latitude, lng: location.longitude },
        zoom: 14,
        mapId: 'a71fbfbb33f2778a',
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      let markerNumber = 1;

      await nearbyList.forEach((place) => {
        const label = document.createElement('div');
        label.style.cssText = labelStyle;

        const icon = document.createElement('img');
        icon.src = 'https://www.svgrepo.com/show/445865/location-point-of-interest.svg';
        icon.style.cssText = labelIconStyle;

        const text = document.createElement('span');
        text.textContent = markerNumber;
        text.style.cssText = labelTextStyle;

        label.appendChild(icon);
        label.appendChild(text);
        // eslint-disable-next-line no-unused-vars
        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: place.location.latitude, lng: place.location.longitude },
          content: label,
        });

        markerNumber += 1;
      });
    })
    .catch((error) => console.error(error));

  return heroPhotos;
};

export default generateMap;
