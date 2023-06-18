import React from "react";

import {useDispatch, useSelector } from "react-redux";

import { selectFilter } from "redux/filter/selectors";

import { addFilter, doClear } from "redux/filter/slice";

// import styles from "./Filter.module.css"
import {
    // ButtonFilter,
    FilterInput, LabelFilter, TextStyled
} from "./Filter.styled";
import { Button } from "@mui/material";

const Filter = () => {

    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const doFilter = (event) => {
        dispatch(addFilter(event.currentTarget.value))
    };

    return (
        <LabelFilter>
            <TextStyled>Пошук за ім'ям:</TextStyled>
            <FilterInput
                type="text" value={filter}
                placeholder="введи ім'я"
                onChange={doFilter} />
            <Button
                color='secondary'
                variant="contained"
                type="button"
                onClick={()=>dispatch(doClear())}
            >
                Зітрись!
            </Button>
            {/* <ButtonFilter
                type="button"
                onClick={()=>dispatch(doClear())}
            >Зітрись!</ButtonFilter> */}
        </LabelFilter>
    // <label className={styles.LabelFilter}>
    //     <p className={styles.Text}>Пошук за ім'ям:</p> 
    //     <input
    //         type="text" value={filter}
    //         className={styles.FilterInput}
    //         placeholder="введи ім'я"
    //         onChange={doFilter}
    //     />
    //         <button
    //             className={styles.ButtonFilter}
    //             type="button"
    //             onClick={()=>dispatch(doClear())}
    //         >Зітрись!</button>
    // </label>
    )}
export default Filter;
