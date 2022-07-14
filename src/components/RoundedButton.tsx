import { TouchableOpacity } from "react-native"

export default ({navigation, }) => {
    return (
        <TouchableOpacity 
            disabled={navigation.navigateNextDisabled}
            style={[
                styles.button, 
                navigation.navigateNextDisabled && styles.buttonDisabled
            ]}
            onPress={navigation.navigateNext}>
            <Text style={styles.buttonText}>{navigateNextLabel}</Text>
        </TouchableOpacity>
    )
}