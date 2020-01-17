import React from 'react';
import Routes from './src/route';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(Routes)

import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};



export default App;
