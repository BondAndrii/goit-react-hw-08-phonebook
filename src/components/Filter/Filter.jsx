import React from "react";

import {useDispatch, useSelector } from "react-redux";

import { selectFilter } from "redux/filter/selectors";

import { addFilter, doClear } from "redux/filter/slice";

import styles from "./Filter.module.css"

const Filter = () => {

    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const doFilter = (event) => {
        dispatch(addFilter(event.currentTarget.value))
    };

    return (
    <label className={styles.LabelFilter}>
        <p className={styles.Text}>Пошук за ім'ям:</p> 
        <input
            type="text" value={filter}
            className={styles.FilterInput}
            placeholder="введи ім'я"
            onChange={doFilter}
        />
            <button
                className={styles.ButtonFilter}
                type="button"
                onClick={()=>dispatch(doClear())}
            >Зітрись!</button>
    </label>
    )}
export default Filter;
