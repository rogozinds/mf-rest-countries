import { useParams } from "react-router-dom";

export const CountryPage = () => {
    const { countryid } = useParams<{ countryid: string }>();

    return (

        <>
            This is country page for {countryid}
        </>
    );
};