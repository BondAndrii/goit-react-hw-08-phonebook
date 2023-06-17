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


const Contacts = () => {
    const isModalOpen = useSelector(selectModalOpen);
    // console.log("isModalOpen",isModalOpen);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch])
    
    return (
        <>
            <button type="button" onClick={()=> dispatch(openForm())}>Додати контакт</button>
            {isModalOpen && <Modal />}
            {/* <RedactForm/> */}
            {/* <Form /> */}
            <h2 >Контакти</h2>
            <Filter />
            {(isLoading && !error && <Loader/>) || (error && <ErrorMessage/>) || <ContactList /> }     
        </>
    )
}

export default Contacts;