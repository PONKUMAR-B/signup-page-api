import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Update from './components/Update';



function App() {
  
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Signin/> } />
                <Route path="/signup" element={ <Signup /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/update" element={ <Update/> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;