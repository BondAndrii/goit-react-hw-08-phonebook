import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "redux/contacts/selectors";

// import styles from "./ContactList.module.css";

import { deleteContact } from "redux/contacts/operations";

import {openEditForm} from "redux/contacts/slice";
import {
    // ButtonElement,
    ContactListElement, ContactListStyled, TextStyled
} from "./ContactList.styled";
import { Button } from "@mui/material";

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // },[dispatch, filteredContacts])

    
    
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
                            {/* <ButtonElement
                                type="button"
                                onClick={() => dispatch(openEditForm(contact))}
                            >
                               Редагуй! 
                            </ButtonElement>
                            <ButtonElement
                                type="button"
                                onClick={() => dispatch(deleteContact(id))}
                            >
                                Видали!
                            </ButtonElement> */}
                        </div>
                    </ContactListElement>
                )
            }
            )}
        </ContactListStyled>
        // <ul className={styles.ContactList}>
        //     {filteredContacts.map((contact) => {
        //         const { id, name, number } = contact;
        //         return (
        //             <li className={styles.ContactList__element} key={id} id={id}>
        //                 <p className={styles.Text}>{name}: {number}</p>
        //                 <div>
        //                     <button
        //                         className={styles.Button__element}
        //                         type="button"
        //                         onClick={() => dispatch(openEditForm(contact))}>Редагуй!</button>
        //                     <button
        //                         className={styles.Button__element}
        //                         type="button"
        //                         onClick={() => dispatch(deleteContact(id))}>Видали!</button>
        //                 </div>

        //             </li>
        //         )
        //     }
        //     )}
        // </ul>
    );
}

export default ContactList;

