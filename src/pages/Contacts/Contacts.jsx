import { useDispatch, useSelector } from "react-redux";

import Filter from "components/Filter/Filter";

// import Form from "components/Form/Form";

// import RedactForm from "components/RedactForm/RedactForm";

import ContactList from "components/ContactList/ContactList";

import Loader from "components/Loader/Loader";

import Modal from "components/Modal/Modal";

import { ErrorMessage } from "components/Error/error";

import { selectError, selectIsLoading, selectModalOpen } from "redux/contacts/selectors";

import { useEffect } from "react";

import { fetchContacts } from "redux/contacts/operations";

import { openForm } from "redux/contacts/slice";

import styled from "./Contacts.module.css"


const Contacts = () => {
    const isModalOpen = useSelector(selectModalOpen);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch])
    return (
        <div className={styled.Contacts} >            
            <Filter />
            <div className={styled.ContactsHeder}>
                <h2 className={styled.SecondTittle} >Контакти</h2>
                <button
                    className={styled.ButtonAddContact}
                    type="button" onClick={() => dispatch(openForm())}
                >
                    Додай!</button>
            </div>
            
            {(isLoading && !error && <Loader />) || (error && <ErrorMessage />) || <ContactList />} 
            {isModalOpen && <Modal />}
        </div>
    )
}

export default Contacts;