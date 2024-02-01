export interface CountryFromRest {
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
}
export interface Country {
    name:string;
    region: string;
    capital: string;
    population: number;
    flagUrl: string;
    flagAlt: string;
}
export interface DetailedCountry extends Country{
}
export const Region = {
    Africa: "africa",
    America: "americas",
    Europe: "europe",
    Asia: "asia",
    Oceania: "oceania",
};
