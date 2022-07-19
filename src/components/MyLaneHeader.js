import React from 'react'
import { X } from 'react-feather'

const MyLaneHeader = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontWeight: 'bold', fontSize: 15 }}>{props.title}</span>
            <X onClick={() => console.log("Lane Sil", props.id)} style={{ cursor: 'pointer' }} color='black' size={15} />
        </div>
    )
}

export default MyLaneHeader