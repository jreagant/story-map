/* eslint-disable react/prop-types */
import React from 'react';

import { Modal, ModalInfo } from './containers/modal';
import { ModalClose } from './styled/button';
import { ModalImage, CloseModal } from './styled/image';
import { ModalLink } from './styled/text';

import closeIcon from './assets/closeIcon.png';

function ImageModal({ modal }) {
  const { modalData, setModalVisible } = modal;
  const {
    source,
    link,
    description,
  } = modalData;

  return (
    <Modal>
      <ModalClose onClick={() => setModalVisible(false)}>
        <CloseModal src={closeIcon} alt="Close modal" />
      </ModalClose>
      <ModalImage src={source} />
      <ModalInfo>
        <p>{description}</p>
        <ModalLink
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Source
        </ModalLink>
      </ModalInfo>
    </Modal>
  );
}

export default ImageModal;
