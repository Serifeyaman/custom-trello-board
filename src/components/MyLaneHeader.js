import React from 'react'
import { X } from 'react-feather'
import { useDispatch } from 'react-redux'
import { deleteLaneX } from 'services/LaneService'

const MyLaneHeader = (props) => {

    const dispatch = useDispatch()

    const deleteLane = () => {
        props.onDelete()
        dispatch(deleteLaneX(props.lanesArray, props.id))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontWeight: 'bold', fontSize: 15, width: "75%" }}>{props.title}</span>
            <span style={{ fontWeight: '200', fontSize: 10 }}>{props.label}</span>
            <X onClick={() => deleteLane()} style={{ cursor: 'pointer' }} color='black' size={15} />
        </div>
    )
}

export default MyLaneHeader