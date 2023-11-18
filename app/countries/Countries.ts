import {countriesEn} from "./countriesEn";
import {numberCountries} from "./numberCountries";
import {countriesRu} from "./countriesRu";

interface Countries {
    name: string
    code: string
}

export default function countries(lang: string, country: string): Countries {
    if(lang === "en") {
        return {name: countriesEn[country], code: numberCountries[country]}
    } else {
        return {name: countriesRu[country], code: numberCountries[country]}
    }
}