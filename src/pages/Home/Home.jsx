import React from "react";

import styled from "./Home.module.css"


const Home = () => {
    return (
        <div className={styled.Home}>
            <h1 className={styled.Tittle} >Welcome to Phonebook!</h1>
            <p className={styled.Text}>
                В цьому застосунку ви можете зберігати найцінніші телефонні номери, дадавати нові, змінювати та видаляти існуючі.
                Легко шукати потрібний контакт за допомогою фільту. Наша команда надіється, що Вам сподобається наш додаток
                і Ви з задоволенням будете ним користуватись та радити друзям.
            </p>
        </div>)
}

export default Home;