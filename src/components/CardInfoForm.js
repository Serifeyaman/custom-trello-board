import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import "assets/css/CardInfoForm.css"
import { myContext } from 'utility/MyContext';
import { updateLaneCardX } from 'services/LaneService';

const CardInfoForm = () => {

    const context = useContext(myContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.id = context.cardInfo.id
        data.comments = context.cardInfo.comments
        var newArray = updateLaneCardX(context.mylanesArray, context.cardInfo.id, data)
        context.setLanesArray(newArray[0])
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col lg="6">
                    <FormGroup className='mb-2'>
                        <Label className='form_Label'>
                            Kart Etiketi
                        </Label>
                        <Input className='form_Input'
                            type="text"
                            id="label"
                            name="label"
                            innerRef={register({ required: true })}
                            invalid={errors.label && true}
                            defaultValue={context.cardInfo.label}
                        />
                    </FormGroup>
                </Col>
                <Col lg="6">
                    <FormGroup className='mb-2'>
                        <Label className='form_Label'>
                            Kart Başlığı
                        </Label>
                        <Input className='form_Input'
                            type="text"
                            id="title"
                            name="title"
                            innerRef={register({ required: true })}
                            invalid={errors.title && true}
                            defaultValue={context.cardInfo.title}
                        />
                    </FormGroup>
                </Col>
                <Col lg="12">
                    <FormGroup className='mb-2'>
                        <Label className='form_Label'>
                            Kart Açıklaması
                        </Label>
                        <Input className='form_Input'
                            type="textarea"
                            id="description"
                            name="description"
                            innerRef={register({ required: true })}
                            invalid={errors.description && true}
                            defaultValue={context.cardInfo.description}
                        />
                    </FormGroup>
                </Col>
                <Col lg="12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button size='sm' color="secondary" > Güncelle</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default CardInfoForm