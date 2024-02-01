import {useCountries} from "../hooks/country";
import React from "react";
import {CountryList} from "../components/CountryList";

export const HomePage:React.FC= () => {
    const countries = useCountries().countries;

    return (
        <>
            This is a home page
            Countries length:{countries.length}

            <CountryList countries={countries}></CountryList>
        </>
    );
};