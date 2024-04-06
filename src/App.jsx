import React from 'react';

import Locations from './Locations';
import LocationDetail from './LocationDetail';
import GlobalStyle from './styled/global';

const { useState } = React;

function App() {
  const [view, setView] = useState({ name: 'Locations', data: null });

  const handleLocationClick = (locationData) => {
    setView({ name: 'LocationDetail', data: locationData });
  };

  return (
    <>
      <GlobalStyle />
      {view.name === 'Locations' && <Locations onLocationClick={handleLocationClick} />}
      {view.name === 'LocationDetail' && <LocationDetail data={view.data} />}
    </>
  );
}

export default App;
