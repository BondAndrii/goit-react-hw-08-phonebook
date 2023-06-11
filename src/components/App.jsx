import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";

import { selectError, selectIsLoading } from "redux/contacts/selectors";

// import AppBar from "./AppBar/AppBar";

// import UserMenu from "./UserMenu/UserMenu";

import LoginForm from "./LoginForm/LoginForm";

import RegisterForm from "./RegisterForm/RegisterForm";

import Form from "./Form/Form";

import Filter from './Filter/Filter'

import ContactList from "./ContactList/ContactList";

import { ErrorMessage } from "./Error/error";

import Loader from "./Loader/Loader";

import styles from "./App.module.css";

import { selectIsLoggedIn } from "redux/auth/selectors";

import UserMenu from "./UserMenu/UserMenu";

import AuthNav from "./AuthNav/AuthNav";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
  
  return (
    <div className={styles.Container}>
       {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      {/* <AppBar/> */}
      {/* <header>        
        <h1 className={styles.Tittle}>Записник контактів</h1>
        <UserMenu/>
      </header> */}
      <LoginForm />
      <RegisterForm/>
      <Form />      
      <h2 className={styles.SecondTittle}>Контакти</h2>
      <Filter />
      {/* {isLoading && !error && <Loader/>} */}
      {(isLoading && !error && <Loader/>) || (error && <ErrorMessage/>) || <ContactList /> }       
    </div>
  );
}
