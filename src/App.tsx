

import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import MainNavBar from './common/mainNavbar';
import Homepage from './homepage/homepage';
import "../cssDist/index.css";

interface AppProps {
  
}
 
interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  state: AppState = {}
  render() { 
    return (
      <React.Fragment>
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App
