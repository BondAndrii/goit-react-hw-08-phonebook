import React, { useEffect } from "react";

import { Route, Routes } from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";

import LoginForm from "../pages/LoginForm/LoginForm";

import RegisterForm from "../pages/RegisterForm/RegisterForm";

import Home from "pages/Home/Home";

import Contacts from "pages/Contacts/Contacts";

import RestrictedRoute from "./RestrictedRoute";

import PrivateRoute from "./PrivateRoute";

import Layout from "./Layout/Layout";

import {selectIsRefreching} from "redux/auth/selectors";

import { refreshUser } from "redux/auth/operations";




export default function App() {
  const dispatch = useDispatch(); 
  const isRefreshing = useSelector(selectIsRefreching);
 
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])
  
  return (
    isRefreshing ? (<p>"Fetching user data"</p>) : (
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<LoginForm />} ></Route> */}
          <Route index element={<Home />} ></Route>
          <Route
            path='/register'
            element={<RestrictedRoute component={RegisterForm} redirectTo="/contacts" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginForm} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login"/>}
          />
        </Route>        
      </Routes>
    )
  );
}
