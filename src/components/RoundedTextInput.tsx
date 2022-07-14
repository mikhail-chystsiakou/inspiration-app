import { TextInput, StyleSheet } from "react-native";

export default ({value, placeholder, onChangeText, style}) => {
    return (
        <TextInput style={[styles.input, style]} 
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },
    input: {
        textAlign: "left",
        borderWidth: 2,
        borderColor: "#DFEFFD",
        borderRadius: 25,
        paddingLeft: 20,
        paddingVertical: 15,
        flex: 1,
        marginBottom: 20,
        maxHeight: 60,
    }
})