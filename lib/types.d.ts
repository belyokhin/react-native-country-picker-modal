export declare const CountryCodeList: string[];
export declare type CountryCode = typeof CountryCodeList[number];
export declare type CallingCode = string;
export declare type CurrencyCode = string;
export declare type TranslationLanguageCodeMap = {
    [key in TranslationLanguageCode]: string;
};
export interface Country {
    region: Region;
    subregion: Subregion;
    currency: CurrencyCode[];
    callingCode: CallingCode[];
    flag: string;
    name: TranslationLanguageCodeMap | string;
    cca2: CountryCode;
}
export declare const RegionList: readonly ["Africa", "Americas", "Antarctic", "Asia", "Europe", "Oceania"];
export declare type Region = typeof RegionList[number];
export declare const SubregionList: readonly ["Southern Asia", "Southern Europe", "Northern Africa", "Polynesia", "Middle Africa", "Caribbean", "South America", "Western Asia", "Australia and New Zealand", "Western Europe", "Eastern Europe", "Central America", "Western Africa", "North America", "Southern Africa", "Eastern Africa", "South-Eastern Asia", "Eastern Asia", "Northern Europe", "Melanesia", "Micronesia", "Central Asia", "Central Europe"];
export declare type Subregion = typeof SubregionList[number];
export declare const TranslationLanguageCodeList: readonly ["common", "cym", "deu", "fra", "hrv", "ita", "jpn", "nld", "por", "rus", "spa", "svk", "fin", "zho", "isr"];
export declare type TranslationLanguageCode = typeof TranslationLanguageCodeList[number];
export declare enum FlagType {
    FLAT = "flat",
    EMOJI = "emoji"
}
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
