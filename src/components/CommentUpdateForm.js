import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import { updateComment } from 'services/LaneService';
import { myContext } from 'utility/MyContext';

const CommentUpdateForm = ({ commentDetail, setIsUpdate, isUpdate, setCommentObject, commentObject }) => {
    const context = useContext(myContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("data", data)
        data.id = commentDetail?.id
        var newArray = updateComment(context.mylanesArray, context.cardInfo.id, data)
        context.setLanesArray(newArray)
        setCommentObject({ comments: newArray[1].comments, isDeleted: !commentObject?.isDeleted })
        setIsUpdate(!isUpdate)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col lg="10">
                    <FormGroup className='mb-2'>
                        <Input
                            className='form_Input'
                            placeholder='Bir yorum yazınız...'
                            type="textarea"
                            id="commentDesc"
                            name="commentDesc"
                            innerRef={register({ required: true })}
                            invalid={errors.commentDesc && true}
                            defaultValue={commentDetail.commentDesc}
                        />
                    </FormGroup>
                </Col>
                <Col lg="2"  >
                    <Button color='secondary' size='md' style={{ fontSize: 14, backgroundColor: '#306073', border: 'none', margin: 5 }}>Güncelle</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default CommentUpdateForm