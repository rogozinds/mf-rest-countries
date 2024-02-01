import {Country} from "../types/types";
import React from "react";
import {CountryCard} from "./CountryCard";
import styles from './CountryList.module.css'; // Import the CSS module

export interface Props {
    countries : Country[];
}
export const CountryList: React.FC<Props> = ({ countries }) => {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        return (<div style={style}>
            <CountryCard country={countries[index]} />
        </div>
        );
    }


    return (
        <div className={styles.list}>
            {countries.map((country, index) => (
                <CountryCard key={index} country={country} />
            ))}
        </div>
    );
};
