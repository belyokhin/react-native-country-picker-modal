/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { CountryCode } from './types';
export interface FlagButtonProps {
    withEmoji?: boolean;
    withCountryCodeButton?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withFlagButton?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    countryCode?: CountryCode;
    placeholder: string;
    onOpen?(): void;
}
export declare const FlagButton: {
    ({ withEmoji, withCountryCodeButton, withCountryNameButton, withCallingCodeButton, withCurrencyButton, withFlagButton, countryCode, containerButtonStyle, onOpen, placeholder, }: FlagButtonProps): JSX.Element;
    defaultProps: {
        withEmoji: boolean;
        withCountryCodeButton: false,
        withCountryNameButton: boolean;
        withCallingCodeButton: boolean;
        withCurrencyButton: boolean;
        withFlagButton: boolean;
    };
};
