import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        album: "",
        artist: "",
        comment: "",
        released: "",
        label: "",
        catalog: "",
        price: "",
        image: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://post-records-server.onrender.com/collection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json()
            .then(() => console.log()))
        navigate("/collection");
    }

    const handleChange = (e) => {
        const key = e.target.id
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

  return (
    <form className="collectionForm" onSubmit={handleSubmit}>
        <h3>Record Submission Form</h3>
        <div className="formText" >
            <label htmlFor="album">Album Title:
                <input type="textarea" id="album" value={formData.album} onChange={handleChange}/>
            </label>
            <label htmlFor="artist">Artist Name: 
                <input type="textarea" id="artist" value={formData.artist} onChange={handleChange}/>
            </label>
            <label htmlFor="comment">Comment: 
                <input type="textarea" id="comment" value={formData.commment} onChange={handleChange}/>
            </label>
            <label htmlFor="released">Release Year: 
                <input type="textarea" id="released" value={formData.released} onChange={handleChange}/>
            </label>
            <label htmlFor="label">Record Label: 
                <input type="textarea"id="label" value={formData.label} onChange={handleChange}/>
            </label>
            <label htmlFor="catalog">Catalog Number: 
                <input type="textarea" id="catalog" value={formData.catalog} onChange={handleChange}/>
            </label>
            <label htmlFor="id">ID Number:
                <input type="textarea" id="id" value={formData.id} onChange={handleChange}/>
            </label>
            <label htmlFor="price">Price: 
                <input type="textarea" id="price" value={formData.price} onChange={handleChange}/>
            </label>
            <label htmlFor="image">Image URL: 
                <input type="textarea" id="image" value={formData.image} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" className="formBtn" />
        </div>
    </form>
  )
}

export default CollectionForm