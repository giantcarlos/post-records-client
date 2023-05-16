import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Collection from './components/Collection';
import Record from './components/Record';
import RecordCollected from './components/RecordCollected';
import Navigation from './components/Navigation';
import CollectionForm from './components/CollectionForm';


const App = () => {
  const [login, setLogin] = useState(false);
  const [records, setRecords] = useState([]);
  const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch("https://post-records-server.onrender.com/records")
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [])

   const handleLogin = () => {
    login === false ? setLogin(true) : setLogin(false);
   }

   const addToCollection = (newRecord) => {
    setCollection(collection => [...collection, newRecord])
   }

  return (
    <div className = "App">
      <Navigation login={login} handleLogin={handleLogin}/>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} records={records}/>
        <Route exact path="/collection" element={<Collection collection={collection} setCollection={setCollection} login={login}/>} />
        <Route exact path="/shop/:id" element={<Record addtoCollection={addToCollection} login={login} />} />
        <Route exact path="/collection/:id" element={<RecordCollected />} />
        <Route exact path="/collectionform" element={<CollectionForm collection={collection} setCollection={setCollection} addtoCollection={addToCollection} />} />
       </Routes>
    </div>
  )
}

export default App;
