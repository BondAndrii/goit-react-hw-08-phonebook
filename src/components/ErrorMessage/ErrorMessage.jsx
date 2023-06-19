import { useSelector } from "react-redux";

import { selectError } from "redux/contacts/selectors";

import { ErrorStyled } from "./ErrorMessage.sttyled";

export const ErrorMessage = () => {

    const isError = useSelector(selectError);

    return (
        <ErrorStyled>{ isError}</ErrorStyled> 
    )
}