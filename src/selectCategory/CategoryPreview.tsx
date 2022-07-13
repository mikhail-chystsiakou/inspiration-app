import { View, Image, Text, StyleSheet, Pressable } from "react-native";

export default ({name, img, selected, setSelectedCategories}) => {
    return (
        <Pressable style={[styles.container, {opacity: selected ? 0.3 : 1}]}
            onPress={() => {
                setSelectedCategories(c => {
                    let newState = [...c];
                    if (newState.includes(name)) {
                        newState = newState.filter(item => item !== name)
                    } else {
                        newState.push(name)
                    }
                    return newState
                })
                
            }}
        >
            <Image style={[styles.image]} source={img}/>
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: "30%",
        maxWidth: "33%",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 0,
        flex: 1
    },
    image: {
        width: "50%",
        aspectRatio: 1,
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
    },
})