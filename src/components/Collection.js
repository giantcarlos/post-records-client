import React, { useEffect } from 'react';
import CardCollected from './CardCollected';

const Collection = ({ login, collection, setCollection }) => {
    const cards = () => collection.map(record => {
            return <CardCollected key={record.id} id={record.id} record={record} />
        })

        useEffect(() => {
            fetch("https://post-records-server.onrender.com/collection")
            .then(res => res.json())
            .then(data => setCollection(data))
         }, [])

    return login ? (
        <div>
            <div className="collection-header">
                You have {collection.length} total records purchased.
            </div>
            <div className="card-grid">{cards()}</div>
        </div>
    ) : (
        <div className="collection-login">Please login to view your purchase history.</div>
    )
}

export default Collection;