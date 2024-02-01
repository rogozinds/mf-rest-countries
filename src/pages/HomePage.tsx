import {useCountries} from "../hooks/country";
import React, {useState} from "react";
import {CountryList} from "../components/CountryList";

export const HomePage:React.FC= () => {
    const { countries } = useCountries();
    const [filter, setFilter] = useState('');

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Filter countries..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />            Countries length:{countries.length}

            <CountryList countries={filteredCountries}></CountryList>
        </>
    );
};