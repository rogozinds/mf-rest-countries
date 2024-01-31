import { getAllCountries } from '../service/CountryService';
import {atomWithRefresh} from "./jotaiUtils";
import {loadable} from "jotai/utils";
import _ from "lodash";

export const countriesAtom = atomWithRefresh(async () => {
    const countries = await getAllCountries();

    return {
        countries,
        mapByRegion: _.keyBy(countries, "region"),
    };
});

export const countriesLoadable = loadable(countriesAtom);
