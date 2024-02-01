import { useParams } from "react-router-dom";
import React from "react";

export const CountryPage: React.FC= () => {
    const { countryid } = useParams<{ countryid: string }>();
    return (

        <>
            This is country Detail pagefor {countryid}
        </>
    );
};