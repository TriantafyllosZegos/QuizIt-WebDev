import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Nav from './components/Nav'




function App() {
  var [count, setCount] = useState(0);


  return (
    <div className="App">
      <Nav></Nav>
    </div>
  );
}



export default App;


