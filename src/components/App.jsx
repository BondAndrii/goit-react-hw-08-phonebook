import React, { Suspense, lazy, useEffect } from "react";

import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import Layout from "./Layout/Layout";

import Loader from "./Loader/Loader";

import {selectIsRefreching} from "redux/auth/selectors";

import { refreshUser } from "redux/auth/operations";

import RestrictedRoute from "./RestrictedRoute";

import PrivateRoute from "./PrivateRoute"

const Home = lazy(() => import("pages/Home/Home"));

const RegisterForm = lazy(() => import("pages/RegisterForm/RegisterForm"));

const LoginForm = lazy(() => import("pages/LoginForm/LoginForm"));

const Contacts = lazy(() => import("pages/Contacts/Contacts"));

;









export default function App() {
  const dispatch = useDispatch(); 
  const isRefreshing = useSelector(selectIsRefreching);
 
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])
  
  return (
    isRefreshing ? (<p>"Fetching user data"</p>) : (
      <Suspense fallback={<Loader/>}>
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
      </Suspense>
    )
  );
}
