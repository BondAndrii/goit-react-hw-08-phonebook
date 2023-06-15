import { useSelector } from "react-redux";

import Filter from "components/Filter/Filter";

import Form from "components/Form/Form";

import ContactList from "components/ContactList/ContactList";

import Loader from "components/Loader/Loader";

import { ErrorMessage } from "components/Error/error";

import { selectError, selectIsLoading } from "redux/contacts/selectors";

const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
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