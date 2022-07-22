import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Col, Form, Input, Row } from 'reactstrap'
import { addLane } from 'redux/lane/action';
import uniqid from 'uniqid'

const MyLaneForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit = (data) => {

        data.id = uniqid()
        data.cards = []

        props.onAdd(data)
        dispatch(addLane(props.lanesArray, data))
    }
    return (
        <div className=' smooth-dnd-container vertical '>
            <div className=' smooth-dnd-draggable-wrapper'>
                <Form onSubmit={handleSubmit(onSubmit)} className='card p-3 eDjtPr' style={{ backgroundColor: 'rgb(235, 236, 240)' }}>
                    <Row className=' react-trello-card mb-2'>
                        <Col lg="12" className='mb-2'>
                            <div style={{
                                fontSize: 12,
                                color: "#4d4d4d",
                                whiteSpace: "pre-wrap"
                            }}>
                                <Input
                                    className='gMefDG'
                                    placeholder='Etiket'
                                    name='label'
                                    type='text'
                                    innerRef={register({ required: true })}
                                    invalid={errors.label && true}
                                />
                            </div>
                        </Col>
                        <Col lg="12" className='mb-2'>
                            <div style={{
                                fontSize: 12,
                                color: "#4d4d4d",
                                whiteSpace: "pre-wrap"
                            }}>
                                <Input
                                    className='gMefDG'
                                    placeholder='Başlık'
                                    name='title'
                                    type='text'
                                    innerRef={register({ required: true })}
                                    invalid={errors.title && true}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" className='text-start'>
                            <Button type="submit" size='sm' outline color='success'>Liste Ekle</Button>
                        </Col>
                        <Col lg="6" className='text-end'>
                            <Button size='sm' color='secondary' onClick={props.onCancel}>İptal</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default MyLaneForm