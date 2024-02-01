export interface CountryFromRest {
    cioc:string;
    name: {
        common:string;
        official:string;

    };
    region: string;
    capital: string[];
    population: number;
    flags:{
        alt:string;
        png:string;
        svg:string;
    }
    flag: string;
    //Detail Page
    currencies:any; //Object
    subRegion:string;
    languages: any; //Object
    tld:string[];//domains array
    borders:string[];//array of cioc

}
export interface Country {
    id:string;
    name:string;
    region: string;
    capital: string;
    population: number;
    flagUrl: string;
    flagAlt: string;
}
export interface DetailedCountry extends Country{
    nativeName:string;
    subRegion:string;
    domains:string[];
    currencies:string[];
    languages:string[];
    borderCountries:string[];
}

export const Region = {
    Africa: "africa",
    America: "americas",
    Europe: "europe",
    Asia: "asia",
    Oceania: "oceania",
};
