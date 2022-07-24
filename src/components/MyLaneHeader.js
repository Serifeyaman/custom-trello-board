import React, { useContext, useState } from 'react'
import { X } from 'react-feather'
import { useForm } from 'react-hook-form'
import { Button, Form, Input } from 'reactstrap'
import { deleteLaneX, updateLaneHeaderX } from 'services/LaneService'
import { myContext } from 'utility/MyContext'

const MyLaneHeader = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const context = useContext(myContext)
    const [laneId, setLaneId] = useState()

    const deleteLane = () => {

        props.onDelete()

        var newArray = deleteLaneX(props.lanesArray, props.id)
        context.setLanesArray(newArray)
    }

    const onSubmit = (data) => {

        if (laneId !== undefined) {
            data.id = laneId

            props.updateTitle(data.title)
            updateLaneHeaderX(props.lanesArray, data)
        }
    }

    window.addEventListener('keydown', (event) => {
        event.key === "Enter" && document.getElementById('myButton').click()
    });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Input
                    onClick={() => setLaneId(props.id)}
                    className='gMefDG'
                    type="text"
                    defaultValue={props.title}
                    name="title"
                    style={{ fontSize: 13, fontWeight: 'bold', width: 150 }}
                    innerRef={register({ required: false })}
                    invalid={errors.label && true}
                />
                <span style={{ fontWeight: '200', fontSize: 13 }}>{props.label}</span>
                <X onClick={() => deleteLane()} style={{ cursor: 'pointer' }} color='black' size={15} />
                <Button hidden id="myButton" type="submit" size='sm' outline color='success'>Kart Ekle</Button>
            </div>
        </Form>

    )
}

export default MyLaneHeader