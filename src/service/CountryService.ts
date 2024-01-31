import {apiClient} from "./BaseService";
import {Country} from "../types/country";
import {handleAxiosError} from "./helpers";

export const getAllCountries = async ()=> {
    return await apiClient
        .get<Country[]>("/all")
        .then((response) => response.data)
        .catch(handleAxiosError);
};

export const getCountryByName = async (name:string)=> {

    return apiClient
        .get(`/name/${name}`)
        .then((response) => response.data)
        .catch(handleAxiosError);
    }
