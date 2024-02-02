
import { useAtom } from 'jotai';
import { countriesLoadable} from "../store/country";
import {Country} from "../types/types";

export interface CountryStore {
    countries:Country[],
    groupByRegion:any,
    mapByName:any,
    mapById:any,

}

const MOCK_COUNTRY=
    {
  "name": "Andorra",
  "population": 77265,
  "capital": "Andorra la Vella",
  "region": "Europe",
  "flagUrl": "https://flagcdn.com/w320/ad.png",
  "flagAtl": "The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band."
}
export const useCountries = () => {
    // return  {countries:[MOCK_COUNTRY, MOCK_COUNTRY, MOCK_COUNTRY], groupByRegion:{}}
    const [countries] = useAtom(countriesLoadable);

    if (countries.state === "hasData") {
        return countries.data as CountryStore;
    } else {
        return {countries:[], groupByRegion:{}};
    }
};
