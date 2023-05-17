import React, { useContext } from 'react'
import { UserContext } from './Context'
import Card from './Card';

const Shop = () => {
    const {records} = useContext(UserContext)

    const cards = () => records.map(record => {
            return <Card key={record.id} id={record.id} record={record} />
        })

    return (
        <div>
            <div className="collection-header">
                {records.length} records currently in stock.
            </div>
            <div className="card-grid">
                {cards()}
            </div>
        </div>
    )
}

export default Shop; 