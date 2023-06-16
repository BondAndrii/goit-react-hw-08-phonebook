import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "redux/contacts/selectors";

import styles from "./ContactList.module.css";

import { deleteContact} from "redux/contacts/operations";

const ContactList = () => {
    const dispatch = useDispatch();
    

    // useEffect(() => {
    //     dispatch(fetchContacts());
    // },[dispatch])

    const filteredContacts = useSelector(selectFilteredContacts);
    
    return (
        <ul className={styles.ContactList}>
            {filteredContacts.map((contact) => {
                
                return (
                     <li className={styles.ContactList__element} key={contact.id} id={contact.id}>
                <p className={styles.Text}>{contact.name}: {contact.number}</p>
                <button className={styles.Button__element} type="button" onClick={()=> dispatch(deleteContact(contact.id))}>Видали!</button>
            </li>
                )
            }
            )}
        </ul>
    );
}

export default ContactList;

