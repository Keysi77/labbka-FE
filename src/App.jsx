import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import { MuiThemeProvider } from 'material-ui/styles';
import AnimalsPage from './components/Animals/AnimalsPage';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        {/* <Navbar /> */}
        <AnimalsPage />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
