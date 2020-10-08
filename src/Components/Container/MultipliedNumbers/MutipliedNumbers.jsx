import React from "react";
import Input from "../../Input/Input";
import DisplayData from "../../DisplayData/DisplayData";
import styles from "./MutipliedNumbers.module.scss";

const MultipliedNumbers = () => {
    const [data, setData] = React.useState([]);

    const setMultipliedNumbers = (newData) => {
        setData(newData);
    };

    return (
        <div className={styles.Section}>
            <Input set={setMultipliedNumbers} />
            <DisplayData data={data} />
        </div>
    );
};

export default MultipliedNumbers;
