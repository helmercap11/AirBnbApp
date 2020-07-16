import React from 'react';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaGVsbWVyY2FwMTEiLCJhIjoiY2tjb3pqOWp3MHE4bjJ5bHU0Znp5dm9waiJ9.FImGbC6ILKE3foBcA554Dw',
);

import Routes from './routes';

const App = () => <Routes />;

export default App;
