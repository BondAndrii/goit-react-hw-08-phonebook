import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

// import { addContact } from "redux/contacts/slice";

import { selectContacts } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

import { addContact } from "redux/contacts/contactsOperations";

import styles from "./Form.module.css";

export default function Form() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const nameId = nanoid();
    const numberId = nanoid();

    function reset() {
        setName('');
        setNumber('');        
    };

    const handleChange = e => {

        const { name, value } = e.currentTarget;

        switch (name) {
            case "names":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        };
        
          
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)) {
            const message = `Абонент ${name} чи абонент з номером ${number} вже є в книзі`;
            alert(message);  
        }
        else { 
            
            const data = {id: nanoid(), name, number }
            dispatch(addContact(data));         
        }  
        
       
        
        reset();         
    }
return (            
            <form className={styles.Form} onSubmit={handleSubmit}>
                <label htmlFor={nameId}>
                    <p className={styles.Text}>Iм'я:</p>
                    <input
                        type="text"
                        name="names"
                        className={styles.Input}
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        placeholder="введи ім'я"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
               
                <label  htmlFor={numberId}>
                    <p className={styles.Text}>Номер:</p>
                    <input
                        type="tel"
                        name="number"
                        className={styles.Input}
                        value={number}
                        id={numberId}
                        onChange={handleChange}
                        placeholder="введи номер телефону"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                
                <button className={styles.Button} type="submit">Запиши!</button>
            </form>               
        );
    
}
