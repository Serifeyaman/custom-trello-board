import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const CardModal = ({ modalOpen, showModal, size, children, title, }) => {
    return (
        <Modal
            isOpen={modalOpen}
            toggle={showModal}
            className={`modal-${size}`}
            centered
        >
            <ModalHeader toggle={showModal}>
                <span style={{ fontSize: 'medium', color: '#5e5873' }} >{title}</span>
            </ModalHeader>
            <ModalBody className='mb-2' >{children}</ModalBody>
        </Modal>
    )
}

export default CardModal