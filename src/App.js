import React from 'react';
import MyProvider from './MyProvider';
import './App.css';

import Landing from './Landing';

function App() {
  return (
    <MyProvider>
      <Landing />
    </MyProvider>
  );
}

export default App;
