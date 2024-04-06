/* eslint-disable react/prop-types */
import React from 'react';

import { ListGrid, ImgRow } from './containers/flex';
import { ImageThumb } from './styled/image';

function ImageGallery({ images }) {
  return (
    <ListGrid>
      {images.map((image) => (
        <ImgRow key={image.id}>
          <ImageThumb src={image.object} />
        </ImgRow>
      ))}
    </ListGrid>
  );
}

export default ImageGallery;
