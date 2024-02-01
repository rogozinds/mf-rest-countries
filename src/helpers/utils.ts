import {Country, CountryFromRest} from "../types/types";

export const fromRest=(fromRest:CountryFromRest):Country=>{
    let capital ="";
    if(fromRest.capital){
        capital =fromRest.capital[0] ? fromRest.capital[0]:"";
    }
    const item =  {
       name:fromRest.name?.common ?fromRest.name.common : "No name",
       population:fromRest.population ? fromRest.population : 0,
       capital:capital,
       region:fromRest.region,
       flagUrl:fromRest?.flags.png ? fromRest.flags.png : "",
       flagAtl:fromRest?.flags.alt ? fromRest.flags.alt :""


   }
   return item;
}