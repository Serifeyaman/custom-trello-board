import React, { useState } from 'react'
import { X } from 'react-feather'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'reactstrap'
import { updateLaneHeader } from 'redux/lane/action'
import { deleteLaneX } from 'services/LaneService'

const MyLaneHeader = (props) => {

    const [laneId, setLaneId] = useState()

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const deleteLane = () => {
        props.onDelete()
        dispatch(deleteLaneX(props.lanesArray, props.id))
    }

    const onSubmit = (data) => {
        if (laneId !== undefined) {
            data.id = laneId

            props.updateTitle(data.title)
            dispatch(updateLaneHeader(props.lanesArray, data))
        }
    }

    window.addEventListener('keydown', (event) => {
        event.key === "Enter" && document.getElementById('myButton').click()
    });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {/* <span onDoubleClick={() => props.onDoubleClick} style={{ fontWeight: 'bold', fontSize: 15, width: "75%" }}>{props.title}</span> */}
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
                {/* <Input
                    onClick={() => setlanedata(props)}
                    className='gMefDG'
                    type="text"
                    defaultValue={props.label}
                    name="label"
                    style={{ fontSize: 13, width: 70 }}
                    innerRef={register({ required: false })}
                    invalid={errors.label && true}
                /> */}
                <X onClick={() => deleteLane()} style={{ cursor: 'pointer' }} color='black' size={15} />
                <Button hidden id="myButton" type="submit" size='sm' outline color='success'>Kart Ekle</Button>
            </div>
        </Form>

    )
}

export default MyLaneHeader