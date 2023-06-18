import { useSelector } from "react-redux";

import { selectError } from "redux/contacts/selectors";

// import styles from "./error.module.css"
import { ErrorStyled } from "./error.styled";

export const ErrorMessage = () => {

    const isError = useSelector(selectError);

    return (
        <ErrorStyled>{ isError}</ErrorStyled>
    //    <p className={styles.Text}>{ isError}</p>       
    )
}