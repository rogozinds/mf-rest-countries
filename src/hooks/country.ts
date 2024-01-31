
import { useAtom } from 'jotai';
import { countriesLoadable} from "../store/country";

export const useCountries = () => {
    const [countries] = useAtom(countriesLoadable);

    if (countries.state === "hasData") {
        return countries.data;
    } else {
        return {countries:[], mapByRegion:{}};
    }
};
