
import {Country} from "../types/types";

export interface Props {
    country : Country;
}
export const CountryCard:React.FC<Props> = ({country}) => {
    return (
        <>
            This is place holder for country
            <div>{country.name}</div>
            <div>{country.capital}</div>
            <div>{country.population}</div>
        </>
    );
};