import { Text, View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import {useState, useEffect} from "react"

export default ({header, subHeader, navigation, children}) => {
    const nextButtonExists = navigation.navigateNext != null;
    const prevButtonExists = navigation.navigatePrev != null;
    const navigateNextLabel = navigation.navigateNextLabel || "Далее";

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardVisible(true); // or some other action
        }
        );
        const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardVisible(false); // or some other action
        }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            {header && <Text style={styles.header}>{header}</Text>}
            {subHeader && <Text style={styles.subHeader}>{subHeader}</Text>}
            
            {children}

            <View style={styles.buttonsContainer}>
                {
                    !isKeyboardVisible && prevButtonExists &&
                    <TouchableOpacity 
                        style={[styles.button, styles.buttonBack]}
                        onPress={navigation.navigatePrev}>
                        <Text style={[styles.buttonText, styles.buttonBackText]}>Назад</Text>
                    </TouchableOpacity>
                }
                {
                    !isKeyboardVisible && nextButtonExists &&
                    <TouchableOpacity 
                        disabled={navigation.navigateNextDisabled}
                        style={[
                            styles.button, 
                            navigation.navigateNextDisabled && styles.buttonDisabled
                        ]}
                        onPress={navigation.navigateNext}>
                        <Text style={styles.buttonText}>{navigateNextLabel}</Text>
                    </TouchableOpacity>
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        overflow: "hidden",
    },
    header: {
        marginTop: 30,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
    },
    subHeader: {
        marginVertical: 30,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "400",
    },
    button: {
        backgroundColor: "#64ACFF",
        borderRadius: 10,
        margin: 10,
        paddingVertical: 13,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowRadius: 5,
        shadowOffset : { width: 1, height: 5},
        flex: 1
    },
    buttonBack: {
        backgroundColor: "white",
        borderColor: "#64ACFF",
        borderWidth: 2,
    },
    buttonDisabled: {
        backgroundColor: "#B2D6FF",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
    },
    buttonBackText: {
        color: "#64ACFF",
    },
    buttonsContainer: {
        flexDirection: "row",
        overflow: "hidden",
    }
});