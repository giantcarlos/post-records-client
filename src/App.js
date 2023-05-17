import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from "./components/Context";
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Record from './components/Record';
import RecordCollected from './components/RecordCollected';
import Navigation from './components/Navigation';


const App = () => {

  return (
    <div className = "App">
      <UserProvider>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/collection" element={<Collection />} />
          <Route exact path="/shop/:id" element={<Record />} />
          <Route exact path="/collection/:id" element={<RecordCollected />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;
