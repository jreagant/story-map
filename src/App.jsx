import React from 'react';

import Locations from './Locations';
import LocationDetail from './LocationDetail';
import ImageModal from './ImageModal';
import GlobalStyle from './styled/global';

const { useState } = React;

function App() {
  const [view, setView] = useState({ name: 'Locations', data: null });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    source: null,
    link: null,
    description: null,
  });

  const handleLocationClick = (locationData) => {
    setView({ name: 'LocationDetail', data: locationData });
  };

  return (
    <>
      <GlobalStyle />
      {modalVisible
      && <ImageModal modal={{ modalData, setModalVisible }} />}
      {view.name === 'Locations'
      && <Locations onLocationClick={handleLocationClick} />}
      {view.name === 'LocationDetail'
      && <LocationDetail data={view.data} modal={{ setModalData, setModalVisible }} />}
    </>
  );
}

export default App;
