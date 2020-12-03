import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.Header}>
            <svg className={styles.icon}>
                <use xlinkHref="./sprites.svg#icon-times-outline"></use>
            </svg>
            <h1>Find multiplied numbers</h1>
            <svg className={styles.icon}>
                <use xlinkHref="./sprites.svg#icon-divide-outline"></use>
            </svg>
        </div>
    );
};

export default Header;
