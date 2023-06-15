import React, { useEffect } from "react";

import { Route, Routes } from 'react-router-dom';

import { useDispatch } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";

// import { selectError, selectIsLoading } from "redux/contacts/selectors";

// import AppBar from "./AppBar/AppBar";

// import UserMenu from "./UserMenu/UserMenu";

import LoginForm from "../pages/LoginForm/LoginForm";

import RegisterForm from "../pages/RegisterForm/RegisterForm";

// import Form from "./Form/Form";

// import Filter from './Filter/Filter'

// import ContactList from "./ContactList/ContactList";

// import { ErrorMessage } from "./Error/error";

// import Loader from "./Loader/Loader";

// import styles from "./App.module.css";

// import {
//   selectIsLoggedIn,
//   selectIsRefreching
// } from "redux/auth/selectors";

// import UserMenu from "./UserMenu/UserMenu";

// import AuthNav from "./AuthNav/AuthNav";

import Home from "pages/Home/Home";

// import Navigation from "./Navigation/Navigation";

import { Layout } from "./Layout/Layout";

import Contacts from "pages/Contacts/Contacts";


export default function App() {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const isRefreshing = useSelector(selectIsRefreching);
 
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])

  //  useEffect(() => {
  //   dispatch(refreshUser());
  // },[dispatch])
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} ></Route>
        <Route path='register' element={<RegisterForm />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="contacts" element={<Contacts/>}></Route>
      </Route>
        
    </Routes>
    // <div className={styles.Container}>
    //   {/* <Navigation/> */}
    //    {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
    //   <AppBar/>
    //   {/* <header>        
    //     <h1 className={styles.Tittle}>Записник контактів</h1>
    //     <UserMenu/>
    //   </header> */}
    //   <LoginForm />
    //   <RegisterForm />
    //   <Home />
    //   <Form />      
    //   <h2 className={styles.SecondTittle}>Контакти</h2>
    //   <Filter />
    //   {/* {isLoading && !error && <Loader/>} */}
    //   {(isLoading && !error && <Loader/>) || (error && <ErrorMessage/>) || <ContactList /> }       
    // </div>
  );
}
