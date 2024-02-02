
import styles from './LabeledText.module.css'; // Import the CSS module
interface Props {
    label:string;
    value:string|number | string[];
}
export const LabeledText:React.FC<Props> = ({label,value}) => {
    let displayValue = "";
    if(value instanceof Array) {
        displayValue = value.join(",");
    } else if (typeof value ==="number") {
        displayValue = value.toString();
    } else{
        displayValue = value;
    }
    return (
        <div className={styles.main}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{displayValue}</div>
        </div>
    );
};