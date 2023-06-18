import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

import { addContact } from "redux/contacts/operations";

// import styled from "./Form.module.css";
import { ButtonStyled, FormStyled, Input, Label, TextStyled } from "./Form.styled";

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
            
            const data = {
                // id: nanoid(),
                name, number
            };
            // console.log("сабміт ін form", data);
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
            <ButtonStyled type="submit">Запиши!</ButtonStyled>
        </FormStyled>
            // <form className={styled.Form} onSubmit={handleSubmit}>
            //     <label className={styled.Label} htmlFor={nameId}>
            //         <p className={styled.Text}>Iм'я:</p>
            //         <input
            //             type="text"
            //             name="names"
            //             className={styled.Input}
            //             id={nameId}
            //             value={name}
            //             onChange={handleChange}
            //             placeholder="введи ім'я"
            //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //             required
            //         />
            //     </label>
               
            //     <label className={styled.Label} htmlFor={numberId}>
            //         <p className={styled.Text}>Номер:</p>
            //         <input
            //             type="tel"
            //             name="number"
            //             className={styled.Input}
            //             value={number}
            //             id={numberId}
            //             onChange={handleChange}
            //             placeholder="введи номер телефону"
            //             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //             required
            //         />
            //     </label>
                
            //     <button className={styled.Button} type="submit">Запиши!</button>
            // </form>               
        );
    
}
