import { CountryCode, Country, FlagType } from './types';
import Fuse from 'fuse.js';
declare type CountryMap = {
    [key in CountryCode]: Country;
};
export declare const loadDataAsync: (dataType?: FlagType) => Promise<CountryMap>;
export declare const getEmojiFlagAsync: (countryCode?: string) => Promise<string>;
export declare const getImageFlagAsync: (countryCode?: string) => Promise<string>;
export declare const getCountryNameAsync: (countryCode?: string, translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr") => Promise<string>;
export declare const getCountryCallingCodeAsync: (countryCode: string) => Promise<string>;
export declare const getCountryCurrencyAsync: (countryCode: string) => Promise<string>;
export declare const getCountriesAsync: (flagType: FlagType, translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr", region?: "Africa" | "Americas" | "Antarctic" | "Asia" | "Europe" | "Oceania" | undefined, subregion?: "Southern Asia" | "Southern Europe" | "Northern Africa" | "Polynesia" | "Middle Africa" | "Caribbean" | "South America" | "Western Asia" | "Australia and New Zealand" | "Western Europe" | "Eastern Europe" | "Central America" | "Western Africa" | "North America" | "Southern Africa" | "Eastern Africa" | "South-Eastern Asia" | "Eastern Asia" | "Northern Europe" | "Melanesia" | "Micronesia" | "Central Asia" | "Central Europe" | undefined, countryCodes?: string[] | undefined, excludeCountries?: string[] | undefined) => Promise<Country[]>;
export declare const search: (filter?: string, data?: Country[], options?: Fuse.FuseOptions<any>) => Country[];
export declare const getLetters: (countries: Country[]) => any[];
export interface CountryInfo {
    countryName: string;
    currency: string;
    callingCode: string;
}
export declare const getCountryInfoAsync: ({ countryCode, translation, }: {
    countryCode: string;
    translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr" | undefined;
}) => Promise<CountryInfo>;
export {};
