import { useSelector } from "react-redux";

import { selectError } from "redux/contacts/selectors";

import styles from "./error.module.css"

export const ErrorMessage = () => {

    const isError = useSelector(selectError);

    return (
       <p className={styles.Text}>{ isError}</p>       
    )
}