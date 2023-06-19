import React from "react";

import {useDispatch, useSelector } from "react-redux";

import { selectFilter } from "redux/filter/selectors";

import { addFilter, doClear } from "redux/filter/slice";

import { FilterInput, LabelFilter, TextStyled } from "./Filter.styled";

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
        </LabelFilter>
    )}
export default Filter;
