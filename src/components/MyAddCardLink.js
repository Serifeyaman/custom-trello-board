import React from 'react'
import { Plus } from 'react-feather'
import { Button } from 'reactstrap'

const MyAddCardLink = (props) => {
    return (
        <div style={{ display: 'flex', width: '100%',justifyContent:'flex-end' }}>
            <Button onClick={() => props.onClick(props.laneId)} className='float-right' size='sm' color="secondary"><Plus size={14}/> Ekle</Button>
        </div>
    )
}

export default MyAddCardLink