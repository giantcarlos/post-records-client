import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './Context'
import { useParams, Link } from 'react-router-dom';

const RecordCollected = () => {
    const {setCollection, collection} = useContext(UserContext)
    const [record, setRecord] = useState({});
    const { id } = useParams();
    const { album, artist, comment, released, label, catalog, price, image } = record;
    
    useEffect(() => {
        fetch(`https://post-records-server.onrender.com/collection/${id}`)
        .then(res => res.json())
        .then(data => setRecord(data))
    }, [id])

    const handleDelete = (id) => {
        setCollection(collection.filter(record => record.id !=id));
        }

    return (
        <div className="record-container">
            <div className="record-image">
                <img src={image} alt="cover"/>
            </div>
            <div className="record-name">{artist}</div>
            <div className="record-name">{album}</div>
            <div className="record-name">Current Value: ${price}</div>
            <div className="record-details">Details</div>
            <div className="record-detail">
                <p>{comment}</p>
                <p>Release Year: {released}</p>
                <p>Record Label: {label}</p>
                <p>Catalog Number: {catalog}</p>
            </div>
            <Link to={"/collection"}>
                    <button className="btn" onClick={handleDelete}>Sell Record</button>
            </Link> 
        </div>
    )
}
export default RecordCollected;