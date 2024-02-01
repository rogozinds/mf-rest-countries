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
enum Region {
  Africa = "africa",
  America = "america",
  Europe = "europe",
  Asia = "asia",
  Oceania = "oceania",
}