
import styles from './LabeledText.module.css'; // Import the CSS module
interface Props {
    label:string;
    value:string;
}
export const LabeledText:React.FC<Props> = ({label,value}) => {
    return (
        <div className={styles.main}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{value}</div>
        </div>
    );
};