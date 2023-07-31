import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome.js'
class App extends Component  {
  render() {
  return (
    <div className="App">
      <Greet name="Rasin" />
      <Greet name="Gopika" />
      <Greet name="Bruhno" />
      
      <Welcome/>
    </div>
  );
}
}
export default App;
