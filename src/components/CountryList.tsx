import {Country} from "../types/types";
import React from "react";
import {CountryCard} from "./CountryCard";
import { FixedSizeList } from "react-window";
import styles from './CountryList.module.css'; // Import the CSS module

export interface Props {
    countries : Country[];
}
export const CountryList: React.FC<Props> = ({ countries }) => {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        return (<div style={style}>
            {countries[index].name}
            <CountryCard country={countries[index]} />
        </div>
        );
    }


    return (

        <div className={styles.countryList}>
            <FixedSizeList
                height={600} // Adjust based on your needs
                itemCount={countries.length}
                itemSize={150} // Adjust the height of each row based on your needs
                width={'100%'}
            >
                {Row}
            </FixedSizeList>
        </div>
    );
};
