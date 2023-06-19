import React from "react";

import { HomeStyled, Text, Tittle } from "./Home.styled";

const Home = () => {

    return (
        <HomeStyled>
            <Tittle>Ласкаво просимо до Phonebook!</Tittle>
            <Text>
                В цьому застосунку ви можете зберігати найцінніші телефонні номери, дадавати нові, змінювати та видаляти існуючі.
                Легко шукати потрібний контакт за допомогою фільту. Наша команда надіється, що Вам сподобається наш додаток
                і Ви з задоволенням будете ним користуватись та радити друзям.
            </Text>
        </HomeStyled>
    )
}

export default Home;