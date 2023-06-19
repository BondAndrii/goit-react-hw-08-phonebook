import { useDispatch, useSelector } from "react-redux";

import Filter from "components/Filter/Filter";

import ContactList from "components/ContactList/ContactList";

import Loader from "components/Loader/Loader";

import Modal from "components/Modal/Modal";

import { selectError, selectIsLoading, selectModalOpen } from "redux/contacts/selectors";

import { useEffect } from "react";

import { fetchContacts } from "redux/contacts/operations";

import { openForm } from "redux/contacts/slice";

import {ContactsHeder, ContactsStyled, SecondTittle} from "./Contacts.styled";

import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

import { Button } from "@mui/material";

const Contacts = () => {
    const isModalOpen = useSelector(selectModalOpen);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch])
    return (
        <ContactsStyled>
            <Filter />
            <ContactsHeder>
                <SecondTittle>Контакти</SecondTittle>
                <Button
                     variant="contained"
                    type="button"
                    onClick={() => dispatch(openForm())}
                >
                    Додай!
                </Button>
            </ContactsHeder>
            {(isLoading && !error && <Loader />) || (error && <ErrorMessage/>
            ) || <ContactList />} 
            {isModalOpen && <Modal />}
        </ContactsStyled>
    )
}

export default Contacts;