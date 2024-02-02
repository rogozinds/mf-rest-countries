import {Country, DetailedCountry} from "../types/types";
import styles from './CountryDetailWidget.module.css';
import {useNavigate} from "react-router-dom";
import {LabeledText} from "./LabeledText";
import {useAtom} from "jotai";
import {countryIdToName} from "../store/country"; // Import the CSS module
export interface Props {
    country: DetailedCountry;
}

export const CountryDetailWidget: React.FC<Props> = ({country}) => {

    const navigate = useNavigate();
    const borderCountries = country.borderCountries;
    const goDetailPage = (name: string) => {
        debugger;
        navigate(`/countries/${name}`);
    }
    // const foo = useAtom(countryIdToName);

    return (
        <div className={styles.container}>
            <img className={styles.flag} src={country.flagUrl} alt={country.flagAlt}/>
            <div className={styles.content}>
                {/*row1*/}
                <div className={styles.header}>{country.name}</div>
                {/*row2*/}
                {/*col1*/}
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <LabeledText label={"Country ID"} value={country.id}></LabeledText>
                        <LabeledText label={"Native Name"} value={country.nativeName}></LabeledText>
                        <LabeledText label={"Population"} value={country.population}></LabeledText>
                        <LabeledText label={"Region"} value={country.region}></LabeledText>
                        <LabeledText label={"Sub Region"} value={country.subRegion}></LabeledText>
                        <LabeledText label={"Capital"} value={country.capital}></LabeledText>
                    </div>
                    {/*col2*/}

                    <div className={styles.col2}>
                        <LabeledText label={"Top Level Domain"} value={country.domains}></LabeledText>
                        <LabeledText label={"Currencies"} value={country.currencies}></LabeledText>
                        <LabeledText label={"Languages"} value={country.languages}></LabeledText>
                        <LabeledText label={"Borders"} value={country.borderCountries}></LabeledText>
                    </div>
                </div>
                {/*row3*/}
                {/*<div className={styles.borders}>*/}
                {/*    <h2>Border Countries</h2>*/}
                {/*    ({borderCountries && borderCountries.map((countryId) => {*/}
                {/*        return (*/}
                {/*            <button onClick={() => {*/}
                {/*                goDetailPage(countryId)*/}
                {/*            }*/}
                {/*            }>{countryId}</button>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}*/}
                {/*</div>*/}

            </div>
        </div>
    );
};