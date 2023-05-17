import React, { useContext } from 'react'
import { UserContext } from './Context'
import CardCollected from './CardCollected';

const Collection = () => {
    const {login, collection} = useContext(UserContext)
    const cards = () => collection.map(record => {
            return <CardCollected key={record.id} id={record.id} record={record} />
        })

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