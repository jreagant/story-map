// eslint-disable-next-line no-unused-vars
const getCurrentLocation = (prevLocation) => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      }),
      (error) => resolve({
        ...prevLocation,
        error: error.message,
      }),
    );
  } else {
    resolve({
      ...prevLocation,
      error: 'Geolocation not supported',
    });
  }
});

export default getCurrentLocation;
