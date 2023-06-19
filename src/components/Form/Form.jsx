import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

import { addContact } from "redux/contacts/operations";

import { FormStyled, Input, Label, TextStyled } from "./Form.styled";

import { Button } from "@mui/material";

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
            const data = {name, number};
            dispatch(addContact(data));         
        }        
        reset();         
    }
    return (        
        <FormStyled onSubmit={handleSubmit}>
            <Label htmlFor={nameId}>
                <TextStyled>Iм'я:</TextStyled>
                <Input
                        type="text"
                        name="names"
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        placeholder="введи ім'я"
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
                        placeholder="введи номер телефону"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                />
            </Label>
            <Button
                style={{ width: "100px", marginLeft: "auto", marginRight: "auto", marginBottom: "20px" }}
                variant="contained" type="submit">Запиши!</Button>
        </FormStyled>             
        );
    
}
