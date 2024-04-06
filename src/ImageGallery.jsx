/* eslint-disable react/prop-types */
import React from 'react';

import { ListGrid, ImgRow } from './containers/flex';
import { ImageThumb } from './styled/image';

function ImageGallery({ images, modal }) {
  const { setModalData, setModalVisible } = modal;

  const openModal = (source, link, description) => {
    setModalData({
      source,
      link,
      description,
    });
    setModalVisible(true);
  };

  return (
    <ListGrid>
      {images.map((image) => (
        <ImgRow key={image.id}>
          <ImageThumb
            src={image.object}
            onClick={() => openModal(
              image.object,
              image.isShownAt,
              image.sourceResource.description[0],
            )}
          />
        </ImgRow>
      ))}
    </ListGrid>
  );
}

export default ImageGallery;
