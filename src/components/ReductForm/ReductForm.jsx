import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectContacts, selectEditUser } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

import {editContact} from "redux/contacts/operations";

import { Input, Label, ReductFormStyled, TextStyled } from "./ReductForm.styled";

import { Button } from "@mui/material";

export default function RedactForm() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const currentUser = useSelector(selectEditUser);

    const [name, setName] = useState(currentUser.name);
    const [number, setNumber] = useState(currentUser.number);
    
    const nameId = nanoid();
    const numberId = nanoid();

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
        
        if (contacts.find(contact => ( contact.id !== id ) &&( contact.name.toLowerCase() === name.toLowerCase() || contact.number === number))) {
            const message = `Такий абонент вже є в книзі`;
            alert(message);  
        }
        else { 
            dispatch(editContact(data));         
        }           
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
        </ReductFormStyled>           
        );
    
}
