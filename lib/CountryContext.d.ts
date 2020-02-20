import * as React from 'react';
import { TranslationLanguageCode } from './types';
import { getEmojiFlagAsync, getImageFlagAsync, getCountryNameAsync, getCountriesAsync, getLetters, getCountryCallingCodeAsync, getCountryCurrencyAsync, getCountryInfoAsync, search } from './CountryService';
export interface CountryContextParam {
    translation?: TranslationLanguageCode;
    getCountryNameAsync: typeof getCountryNameAsync;
    getImageFlagAsync: typeof getImageFlagAsync;
    getEmojiFlagAsync: typeof getEmojiFlagAsync;
    getCountriesAsync: typeof getCountriesAsync;
    getLetters: typeof getLetters;
    getCountryCallingCodeAsync: typeof getCountryCallingCodeAsync;
    getCountryCurrencyAsync: typeof getCountryCurrencyAsync;
    search: typeof search;
    getCountryInfoAsync: typeof getCountryInfoAsync;
}
export declare const DEFAULT_COUNTRY_CONTEXT: {
    translation: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr";
    getCountryNameAsync: (countryCode?: string, translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr") => Promise<string>;
    getImageFlagAsync: (countryCode?: string) => Promise<string>;
    getEmojiFlagAsync: (countryCode?: string) => Promise<string>;
    getCountriesAsync: (flagType: import("./types").FlagType, translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr", region?: "Africa" | "Americas" | "Antarctic" | "Asia" | "Europe" | "Oceania" | undefined, subregion?: "Southern Asia" | "Southern Europe" | "Northern Africa" | "Polynesia" | "Middle Africa" | "Caribbean" | "South America" | "Western Asia" | "Australia and New Zealand" | "Western Europe" | "Eastern Europe" | "Central America" | "Western Africa" | "North America" | "Southern Africa" | "Eastern Africa" | "South-Eastern Asia" | "Eastern Asia" | "Northern Europe" | "Melanesia" | "Micronesia" | "Central Asia" | "Central Europe" | undefined, countryCodes?: string[] | undefined, excludeCountries?: string[] | undefined) => Promise<import("./types").Country[]>;
    getCountryCallingCodeAsync: (countryCode: string) => Promise<string>;
    getCountryCurrencyAsync: (countryCode: string) => Promise<string>;
    search: (filter?: string, data?: import("./types").Country[], options?: import("fuse.js").FuseOptions<any>) => import("./types").Country[];
    getLetters: (countries: import("./types").Country[]) => any[];
    getCountryInfoAsync: ({ countryCode, translation, }: {
        countryCode: string;
        translation?: "common" | "cym" | "deu" | "fra" | "hrv" | "ita" | "jpn" | "nld" | "por" | "rus" | "spa" | "svk" | "fin" | "zho" | "isr" | undefined;
    }) => Promise<import("./CountryService").CountryInfo>;
};
export declare const CountryContext: React.Context<CountryContextParam>;
export declare const useContext: () => CountryContextParam;
export declare const CountryProvider: React.ProviderExoticComponent<React.ProviderProps<CountryContextParam>>, CountryConsumer: React.ExoticComponent<React.ConsumerProps<CountryContextParam>>;
