import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './Context'
import { useParams, Link } from 'react-router-dom';

const Record = () => {
    const {collection, setCollection, login} = useContext(UserContext)
    const [record, setRecord] = useState({});
    const { id } = useParams();
    const { album, artist, comment, released, label, catalog, price, image } = record
    
    useEffect(() => {
        fetch(`https://post-records-server.onrender.com/records/${id}`)
        .then(res => res.json())
        .then(data => setRecord(data))
    }, [id])

    const handlePurchase = (record) => {
        setCollection(collection => [...collection, record])
    }

    return (
        <div className="record-container">
            <div className="record-image">
                <img src={image} alt="cover"/>
            </div>
            <div className="record-name">{artist} - {album}</div>
            <div className="record-name">${price}</div>
            <div className="record-details">Details</div>
            <div className="record-detail">
                <p>{comment}</p>
                <p>Release Year: {released}</p>
                <p>Record Label: {label}</p>
                <p>Catalog Number: {catalog}</p>
            </div>
           {login ?  
                <Link to={"/collection"}>
                    <button className="btn" onClick={handlePurchase}>Buy Now</button>
                </Link> 
                : <div className="record-login">Please login to make a purchase.</div>}
        </div>
    )
}

export default Record;