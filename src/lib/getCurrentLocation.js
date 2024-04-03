const getCurrentLocation = (prevLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return ({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        return ((prevLocation) => ({
          ...prevLocation,
          error: error.message,
        }));
      }
    );
  } else {
    return ((prevLocation) => ({
      ...prevLocation,
      error: 'Geolocation not supported'
    }));
  }
}

export default getCurrentLocation;
