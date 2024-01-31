import { useParams } from "react-router-dom";
import {useCountries} from "../hooks/country";

export const CountryPage = () => {
    const { countryid } = useParams<{ countryid: string }>();
    const countries = useCountries();
    return (

        <>
            This is country page for {countryid}
            Countries length:{countries.countries.length}
        </>
    );
};