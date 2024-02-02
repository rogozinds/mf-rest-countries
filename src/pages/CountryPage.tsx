import { useParams } from "react-router-dom";
import React from "react";
import {CountryDetailWidget} from "../components/CountryDetailWidget";
import {useCountries} from "../hooks/country";

export const CountryPage: React.FC= () => {
    const { countryid } = useParams<{ countryid: string }>();

    const { mapByName } = useCountries();
    const  country = mapByName[countryid];
    return (

        <>
           <CountryDetailWidget country={country}/>
        </>
    );
};