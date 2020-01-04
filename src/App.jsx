import React from 'react';
// KOMPONENTY
import Navbar from './components/Navigation/Navbar';
//
import { MuiThemeProvider } from 'material-ui/styles';

import './App.css';
import Animals from './pages/animals/animals.component';

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <Animals />
        {/* <Navbar /> */}
        {/* <AnimalsPage /> */}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
