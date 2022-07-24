import React from 'react'
import { Card, CardHeader, CardTitle, Input } from 'reactstrap'
// import "assets/css/MyLaneCard.css"

const MyLaneCard = (props) => {
    const updateCard = (card) => {
        // props.onChange({...card, id})
    }
    return (
        <Card className='out_Card'>
            <CardHeader>
                <CardTitle draggable={props.cardDraggable}>
                    {props.editable ? <Input className='inline_Input' value={props.title} placeholder={props.t('placeholder.title')} resize='vertical' /> : props.title}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default MyLaneCard