import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import { myContext } from 'utility/MyContext';
import uniqid from 'uniqid'
import { addComment, deleteComment } from 'services/LaneService';
import { Trash } from 'react-feather';

const CardComment = () => {

    const context = useContext(myContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [commentObject, setCommentObject] = useState({ comments: context.cardInfo.comments, isDeleted: false })

    const onSubmit = (data) => {
        data.id = uniqid()
        var newArray = addComment(context.mylanesArray, context.cardInfo.id, data)
        context.setLanesArray(newArray)
        reset()
    }

    const commentDelete = (array, card, comment) => {
        var newArray = deleteComment(array, card, comment)
        context.setLanesArray(newArray[0])
        setCommentObject({ comments: newArray[1].comments, isDeleted: !commentObject.isDeleted })
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col lg="12">
                        <FormGroup className='mb-2'>
                            <Input className='form_Input'
                                placeholder='Bir yorum ekle...'
                                type="textarea"
                                id="commentDesc"
                                name="commentDesc"
                                innerRef={register({ required: true })}
                                invalid={errors.commentDesc && true}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="12" >
                        <Button outline size='sm' color="secondary" > Yorum Ekle</Button>
                    </Col>
                </Row>
            </Form>

            {
                commentObject.comments.map((item, key) => (
                    <div key={key}>
                        <Card className='mb-1 mt-2' style={{ backgroundColor: "#9188b3" }}>
                            <CardBody>
                                <Row style={{ alignItems: 'center' }}>
                                    <Col lg="10">
                                        <p style={{ color: 'whitesmoke', fontSize: 14 }}>{item.commentDesc}</p>
                                    </Col>
                                    <Col lg="2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Trash onClick={() => commentDelete(context.mylanesArray, context.cardInfo.id, item.id)} size={18} color='white' />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }
        </>
    )
}

export default CardComment