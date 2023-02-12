

import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import MainNavBar from './common/mainNavbar';
import Homepage from './homepage/homepage';
import "../cssDist/index.css";
import Login from './auth/Login';
import Register from './auth/Register';
import AppContext from './context/AppContext';
import AuthInput from './interfaces/AuthInput';
import Plans from './interfaces/Plans';
interface AppProps {
  
}
interface AppState {
  authInput: AuthInput;
  plans: Plans[];
}
 
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    authInput: {
      username: "",
      email: "",
      password: "",
      newsletter: false,
      termsOfUse: false,
      onChange: (input: string, value: string | boolean): void => {this.handleInputChange(input, value)}
    },

    plans: [
      {
        title: "Enkel",
        price: "1,500",
        primary: false,
        benefits: [
          "En enkel hemsida",
          "Expert rådgivning",
          "Hög prestanda",
          "Bästa praxis",
          "Assisterad publicering",
        ]
      },
      {
        title: "Professionell",
        price: "3,000",
        primary: true,
        benefits: [
          "Fler siding webbplats",
          "Backend funktionalitet",
          "Web & Sites Domän",
          "Kvalitativa webbsidor",
          "Assisterad publicering",
        ]
      },
      {
        title: "Avancerad",
        price: "7,500",
        primary: false,
        benefits: [
          "Stor Webbapplikation",
          "Backend Applikation",
          "Web & Sites Domän",
          "Kvalitativa webbsidor",
          "Assisterad publicering",
        ]
      }
    ]
  }

  handleInputChange = (input: string, value: string | boolean): void => {
    const authInput: AuthInput = {...this.state.authInput};
    authInput[input] = value;
    console.log(input)
    this.setState({authInput});
  }

  render() { 
    return (
      <React.Fragment>
        <MainNavBar />
        <Routes>
          <Route path="login" element={<AppContext.Provider value={this.state}><Login /></AppContext.Provider>} />
          <Route path="register" element={<AppContext.Provider value={this.state}><Register /></AppContext.Provider>} />
          <Route path="/" element={<AppContext.Provider value={this.state}><Homepage /></AppContext.Provider>} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App
