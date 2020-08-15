import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';



function App() {
  return (
    <div>
        <Navbar />
        <Home greeting = "Hola cómo estás? 😃"/>
    </div>
    
  );
}

export default App;
