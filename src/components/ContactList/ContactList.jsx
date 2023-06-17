import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "redux/contacts/selectors";

import styles from "./ContactList.module.css";

import { deleteContact } from "redux/contacts/operations";

import {openEditForm} from "redux/contacts/slice";

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // },[dispatch, filteredContacts])

    
    
    return (
        <ul className={styles.ContactList}>
            {filteredContacts.map((contact) => {
                const { id, name, number } = contact;
                return (
                    <li className={styles.ContactList__element} key={id} id={id}>
                        <p className={styles.Text}>{name}: {number}</p>
                        <button
                            className={styles.Button__element}
                            type="button"
                            onClick={() => dispatch(openEditForm(contact))}>Редагуй!</button>
                        <button className={styles.Button__element} type="button" onClick={()=> dispatch(deleteContact(id))}>Видали!</button>
                    </li>
                )
            }
            )}
        </ul>
    );
}

export default ContactList;

