import React from 'react';
import MyProvider from './MyProvider';
import './App.css';

import LanguageChange from './LanguageChange';

function App() {
  return (
    <MyProvider>
      <LanguageChange />
    </MyProvider>
  );
}

export default App;
