import { useDispatch, useSelector } from "react-redux";

import Filter from "components/Filter/Filter";

import Form from "components/Form/Form";

import ContactList from "components/ContactList/ContactList";

import Loader from "components/Loader/Loader";

import { ErrorMessage } from "components/Error/error";

import { selectError, selectIsLoading } from "redux/contacts/selectors";

import { useEffect } from "react";

import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
    return (
        <>
            <Form />
            <h2 >Контакти</h2>
            <Filter />
            {(isLoading && !error && <Loader/>) || (error && <ErrorMessage/>) || <ContactList /> }     
        </>
    )
}

export default Contacts;