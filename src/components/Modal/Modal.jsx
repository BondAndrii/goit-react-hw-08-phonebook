import React, { useEffect } from "react";

import { createPortal } from "react-dom";

import { selectEditForm, selectModalOpen } from "redux/contacts/selectors";

import { useDispatch, useSelector } from "react-redux";

import Form from "components/Form/Form";

import ReductForm from "components/ReductForm/ReductForm";

import { closeModal } from "redux/contacts/slice";

import { ModalStyled, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
    const isModalOpen = useSelector(selectModalOpen);
    const editForm = useSelector(selectEditForm);
    const dispatch = useDispatch();

     useEffect(() => {        
        const handleKeyDown = event => {        
            if (event.code === 'Escape') {                
                dispatch(closeModal());
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    },[dispatch])

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            dispatch(closeModal());
        }
    }

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalStyled>
                <div>{(isModalOpen && editForm) ? <ReductForm/> : <Form/> }</div>  
            </ModalStyled>            
        </Overlay>,
        modalRoot
    );
}



export default Modal;