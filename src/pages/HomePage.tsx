import {useCountries} from "../hooks/country";
import React, {useState} from "react";
import {CountryList} from "../components/CountryList";
import {Region} from "../types/types";

const ALL="All";
export const HomePage:React.FC= () => {
    const { countries } = useCountries();
    const regions = [ALL, ...Object.values(Region)];

    const [filter, setFilter] = useState('');
    const [regionFilter, setRegionFilter] = useState(ALL);

    const filteredCountries = countries.filter(country => {
        return (country.name.toLowerCase().includes(filter.toLowerCase())) &&
            (regionFilter.toLowerCase()===ALL.toLowerCase() || country?.region?.toLowerCase()===regionFilter.toLowerCase());
    });

    return (
        <>
            <input
                type="text"
                placeholder="Filter countries..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select
                value={regionFilter}
                onChange={(e) => {
                    setRegionFilter(e.target.value)
                }}
            >
                {regions.map(region => (
                    <option key={region} value={region.toLowerCase()}>{region}</option>
                ))}
            </select>
            Countries length:{filteredCountries.length}
            Region filter: {countries[0]?.region}
            Region filter: {regionFilter == countries[0]?.region}
            Countries length:{filteredCountries.length>0?filteredCountries[0].region: "falh"}

            <CountryList countries={filteredCountries}></CountryList>
        </>
    );
};