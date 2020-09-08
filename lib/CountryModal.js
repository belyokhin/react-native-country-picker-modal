import * as React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { AnimatedModal } from './AnimatedModal';
import { Modal } from './Modal';
import { useTheme } from './CountryTheme';
import { CountryModalContext } from './CountryModalProvider';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.select({
            ios: 0,
            android: StatusBar.currentHeight,
        })
    },
});
export const CountryModal = ({ children, withModal, disableNativeModal, ...props }) => {
    const { backgroundColor } = useTheme();
    const { teleport } = React.useContext(CountryModalContext);
    const content = (React.createElement(View, { style: [styles.container, { backgroundColor }] }, children));
    React.useEffect(() => {
        if (disableNativeModal) {
            teleport(React.createElement(AnimatedModal, Object.assign({}, props), content));
        }
    }, [disableNativeModal]);
    if (withModal) {
        if (Platform.OS === 'web') {
            return React.createElement(Modal, Object.assign({}, props), content);
        }
        if (disableNativeModal) {
            return null;
        }
        return React.createElement(Modal, Object.assign({}, props), content);
    }
    return content;
};
CountryModal.defaultProps = {
    animationType: 'slide',
    animated: true,
    withModal: true,
    disableNativeModal: false,
};
//# sourceMappingURL=CountryModal.js.map
