import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Landing from './src/Pages/Landing';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Landing />
    </PaperProvider>
  );
}
export default App;
