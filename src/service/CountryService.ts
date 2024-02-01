import {apiClient} from "./BaseService";
import {CountryFromRest} from "../types/types";
import {handleAxiosError} from "./helpers";

export const getAllCountries = async ()=> {
    return await apiClient
        .get<CountryFromRest[]>("/all")
        .then((response) => response.data)
        .catch(handleAxiosError);
};

export const getCountryByName = async (name:string)=> {

    return apiClient
        .get(`/name/${name}`)
        .then((response) => response.data)
        .catch(handleAxiosError);
    }
