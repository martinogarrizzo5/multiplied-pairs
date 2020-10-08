import React from "react";
import styles from "./DisplayData.module.scss";

const DisplayData = (props) => {
    const data = props.data
        ? props.data.map((el, i) => {
              return <li key={el + i}>{el}</li>;
          })
        : null;

    return (
        <div className={styles.Data_section}>
            <ul className={styles.Data_section_list}>{data}</ul>
        </div>
    );
};

export default DisplayData;
