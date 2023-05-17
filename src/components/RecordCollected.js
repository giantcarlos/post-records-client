import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RecordCollected = ({ record }) => {
    const { id } = useParams();
    const { album, artist, comment, released, label, catalog, price, image } = record;
    

    const handleDelete = () => {
        fetch(`https://post-records-server.onrender.com/collection/${id}`, {
            method: "DELETE"
        })
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