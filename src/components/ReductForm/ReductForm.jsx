import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectContacts, selectEditUser } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

import {
    // addContact,
    editContact
} from "redux/contacts/operations";

// import styles from "./ReductForm.module.css";
import {
    // ButtonStyled,
    Input, Label, ReductFormStyled, TextStyled
} from "./ReductForm.styled";
import { Button } from "@mui/material";

export default function RedactForm() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const currentUser = useSelector(selectEditUser);

    const [name, setName] = useState(currentUser.name);
    const [number, setNumber] = useState(currentUser.number);
    
    const nameId = nanoid();
    const numberId = nanoid();

    // useEffect(() => {
    //      console.log("currentUser in useEffect", currentUser.id)
    // }, [currentUser])

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

    const handleSubmit = event => {
        event.preventDefault();
        const id = currentUser.id;
        const data = { name, number, id, };
        
        // dispatch(editContact(data));  
        // console.log("сабміт ін reductform", data);
        // if (contacts.find(contact => (contact.id !== id) && (contact.name.toLowerCase() === name.toLowerCase()){
        //     const message = `Абонент ${name} чи абонент з номером ${number} вже є в книзі`;
        //     alert(message);  
        // } else if ((contact.number === number) ) {

        // }))
        
        if (contacts.find(contact => ( contact.id !== id ) &&( contact.name.toLowerCase() === name.toLowerCase() || contact.number === number))) {
            const message = `Такий абонент вже є в книзі`;
            alert(message);  
        }
        else { 
            
            // const data = {name, number};
            // console.log("сабміт ін reductform", data);
            dispatch(editContact(data));         
        }     
    //    reset();         
    }
    return (    
        <ReductFormStyled onSubmit={handleSubmit}>
            <Label htmlFor={nameId}>
                <TextStyled>Iм'я:</TextStyled>
                <Input
                        type="text"
                        name="names"
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        placeholder={`${currentUser.name} ??`}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                />
            </Label>
            <Label htmlFor={numberId}>
                <TextStyled>Номер:</TextStyled>
                <Input
                        type="tel"
                        name="number"
                        value={number}
                        id={numberId}
                        onChange={handleChange}
                        placeholder={`${currentUser.number} ??`}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                
                />
            </Label>
            <Button
                style={{ width: "100px", marginLeft: "auto", marginRight: "auto", marginBottom: "20px" }}
                variant="contained" type="submit">Запиши!</Button>
            {/* <ButtonStyled type="submit">Запиши!</ButtonStyled> */}
        </ReductFormStyled>
            // <form className={styles.Form} onSubmit={handleSubmit}>
            //     <label className={styles.Label} htmlFor={nameId}>
            //         <p className={styles.Text}>Iм'я:</p>
            //         <input
            //             type="text"
            //             name="names"
            //             className={styles.Input}
            //             id={nameId}
            //             value={name}
            //             onChange={handleChange}
            //             placeholder={`${currentUser.name} ??`}
            //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //             required
            //         />
            //     </label>
               
            //     <label className={styles.Label} htmlFor={numberId}>
            //         <p className={styles.Text}>Номер:</p>
            //         <input
            //             type="tel"
            //             name="number"
            //             className={styles.Input}
            //             value={number}
            //             id={numberId}
            //             onChange={handleChange}
            //             placeholder={`${currentUser.number} ??`}
            //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //             required
            //         />
            //     </label>
                
            //     <button className={styles.Button} type="submit">Запиши!</button>
            // </form>               
        );
    
}
