
import {Country, DetailedCountry} from "../types/types";
import styles from './CountryDetailWidget.module.css';
import {useNavigate} from "react-router-dom";
import {LabeledText} from "./LabeledText"; // Import the CSS module
export interface Props {
    country : DetailedCountry;
}
export const CountryDetailWidget:React.FC<Props> = ({country}) => {

    const navigate = useNavigate();
    const goDetailPage=(name:string)=>{
        navigate(`/countries/${name}`);
    }
    return (
        <div className={styles.content}>
            <LabeledText label={"Native Name"} value={country.nativeName}></LabeledText>
        </div>
    );
};