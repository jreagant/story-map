/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

import { Grid, Row, HeroRow } from './containers/flex';
import { LocationHero } from './styled/image';

import Description from './Description';
import ImageGallery from './ImageGallery';

import fetchLocationDescriptions from './lib/fetchLocationDescriptions';
import getHeroImage from './lib/getHeroImage';
import getImages from './lib/getImages';

import heroPlaceholder from './assets/story-map-hero-loading.jpg';
import sampleDescription from './sampleDescription';

const { useEffect, useState } = React;

function LocationDetail({ data, modal, nav }) {
  const [locationDesc, setLocationDesc] = useState('Loading...');
  const [heroImage, setHeroImage] = useState(heroPlaceholder);
  const [locationImages, setLocationImages] = useState([]);

  useEffect(() => {
    // fetchLocationDescriptions(data.name, data.address)
    //   .then((result) => setLocationDesc(result.data))
    //   .catch((error) => console.error(error));

    getHeroImage(data.photo)
      .then((result) => setHeroImage(result.data))
      .catch((error) => console.error(`Client error: ${error}`));

    getImages(data.name, data.address)
      .then((result) => setLocationImages(result.data.docs))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid>
      <Row>
        <h1 onClick={() => nav({ name: 'Locations', data: null })}>{'< Back'}</h1>
      </Row>
      <HeroRow>
        <LocationHero src={heroImage} />
      </HeroRow>
      <Row>
        <h1>{data.name}</h1>
        <h5>{data.address}</h5>
      </Row>
      <Row>
        <Description description={sampleDescription} />
      </Row>
      <Row>
        {locationImages.length > 0
          ? <h2>From the archives</h2>
          : <> </>}
        <ImageGallery images={locationImages} modal={modal} />
      </Row>
    </Grid>
  );
}

export default LocationDetail;

/**
 * TODO
 * Set conditional render for location error
 *
 */
