import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
    const [actualNumber, setActualNumber] = React.useState("");

    const setNumberToFind = (event) => {
        // handling valid inputs
        const maxValue = parseInt(event.target.max);
        const inputValue = parseInt(event.target.value);

        if (inputValue <= maxValue || isNaN(inputValue)) {
            setActualNumber(event.target.value);
            return;
        } else {
            if (inputValue > maxValue) {
                setActualNumber(maxValue);
            }
        }
    };

    const handleAlgorithm = (event) => {
        event.preventDefault();
        const data = FindMultiplied(actualNumber);
        props.set(data);
    };

    const FindMultiplied = (x) => {
        if (!x) return ["invalid number!"];

        if (x < 0) x = -x;

        const results = [];
        let y = 2;

        // check wheter x is divisible for all z integer values lower than x
        for (let z = 1; z < x; z++) {
            // stop if z greater than y
            if (z > y) {
                break;
            }

            y = x / z;

            // if y is a integer push it in results
            if (y % 1 === 0) {
                results.push(`${z} * ${y}`);
            }
        }

        return results;
    };

    // prevent + - e value input
    const preventUnexpectedKeys = (evt) => {
        if (
            (evt.which !== 8 && evt.which !== 0 && evt.which < 48) ||
            evt.which > 57
        ) {
            evt.preventDefault();
        }
    };

    return (
        <form>
            <input
                type="number"
                name="number"
                min="1"
                max="99999999999999"
                onChange={setNumberToFind}
                onKeyPress={preventUnexpectedKeys}
                value={actualNumber}
                className={styles.Input}
                autoFocus
            />
            <a
                className={styles.SubmitButton}
                onClick={handleAlgorithm}
                href="/"
            >
                Find
            </a>
        </form>
    );
};

export default Input;
