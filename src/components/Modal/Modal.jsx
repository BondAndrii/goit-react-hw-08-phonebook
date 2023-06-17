import React, { useEffect } from "react";

import { createPortal } from "react-dom";

// import { selectModalOpen } from "redux/contacts/selectors";

import { toggleModal } from "redux/contacts/slice";

import { useDispatch } from "react-redux";

import Form from "components/Form/Form";

import "./Modal.css";


// import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
    // const isModalOpen = useSelector(selectModalOpen);
    const dispatch = useDispatch();

     useEffect(() => {
        
        const handleKeyDown = event => {
        
            if (event.code === 'Escape') {                
                dispatch(toggleModal());
            }
    }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    },[dispatch])

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            dispatch(toggleModal());
        }
    }

    return createPortal(
            <div
                className="Overlay"
                onClick={handleBackdropClick}
            >
                <div
                    className="Modal"
                >
                
                <div><Form/></div>
                
            </div>
        </div>,
        modalRoot
    );
}



export default Modal;