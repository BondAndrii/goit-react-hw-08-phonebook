import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "redux/contacts/selectors";

import { deleteContact } from "redux/contacts/operations";

import { openEditForm } from "redux/contacts/slice";

import { ContactListElement, ContactListStyled, TextStyled } from "./ContactList.styled";

import { Button } from "@mui/material";

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);   
    
    return (
        <ContactListStyled>
            {filteredContacts.map((contact) => {
                const { id, name, number } = contact;
                return (
                    <ContactListElement key={id} id={id}>
                        <TextStyled>{name}: {number}</TextStyled>
                        <div>
                            <Button
                                mr={3}
                                variant="contained"
                                type="button"
                                onClick={() => dispatch(openEditForm(contact))}
                            >
                                 Редагуй!
                            </Button>
                            <Button
                                color='secondary'
                                variant="contained"
                                type="button"
                                onClick={() => dispatch(deleteContact(id))}
                            >
                                Видали!
                            </Button>
                        </div>
                    </ContactListElement>
                )
            }
            )}
        </ContactListStyled>
    );
}

export default ContactList;

