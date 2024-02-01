
import {Country} from "../types/types";
import styles from './CountryCard.module.css';
import {LabeledText} from "./LabeledText";
import {useNavigate} from "react-router-dom"; // Import the CSS module
export interface Props {
    country : Country;
}
export const CountryCard:React.FC<Props> = ({country}) => {

    const navigate = useNavigate();
    const goDetailPage=(name:string)=>{
        navigate(`/countries/${name}`);
    }
    return (
        <div className={styles.card}
             onClick={()=>{goDetailPage(country.name)}
        }>
            <img className={styles.flag} src={country.flagUrl} alt={country.flagAlt}  />
            <div className={styles.content}>
                <div className={styles.header}>{country.name}</div>
                <LabeledText label="population:" value={country.population.toString()}/>
                <LabeledText label="region:" value={country.region}/>
                <LabeledText label="capital:" value={country.capital}/>
            </div>
        </div>
    );
};