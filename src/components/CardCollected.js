import React from 'react';
import { Link } from 'react-router-dom';

const CardCollected = ({ id, record }) => {
    const { album, artist, comment, image }  = record

    return (
        <Link to={`/collection/${id}/`}>
         <div className="card">
            <div className="card-image">
                <img src={image} alt="cover"/>
            </div>
            <div className="card-album">{album}</div>
            <div className="card-details">{artist}</div>
            <div className="card-details">{comment}</div>
        </div>
        </Link>
    )
}

export default CardCollected;