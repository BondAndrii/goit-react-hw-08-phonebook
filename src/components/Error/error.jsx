import { useSelector } from "react-redux";

import { selectError } from "redux/contacts/selectors";

import { ErrorStyled } from "./error.styled";





// import styles from "./error.module.css"
// import { ErrorStyled } from "./Error.styled";

export const ErrorMessage = () => {

    const isError = useSelector(selectError);

    return (
        <ErrorStyled>{ isError}</ErrorStyled>
    //    <p className={styles.Text}>{ isError}</p>       
    )
}