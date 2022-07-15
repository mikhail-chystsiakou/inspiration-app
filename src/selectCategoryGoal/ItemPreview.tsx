import { View, Image, Text, StyleSheet, Pressable, Animated } from "react-native";
import { useRef} from "react";

const IMAGE_SIZE_SELECTED = 1.5;
const IMAGE_SIZE_UNSELECTED = 1;

export default ({name, subheader, img, selectedItem, setSelectedItem}) => {
    const thisSelected = name === selectedItem;
    const otherSelected = selectedItem && !thisSelected;

    const imageSize = useRef(
        new Animated.Value(IMAGE_SIZE_UNSELECTED)
    ).current;

    const selectImage = () => {
        Animated.timing(imageSize, {
            toValue: IMAGE_SIZE_SELECTED,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }
    const unSelectImage = () => {
        Animated.timing(imageSize, {
            toValue: IMAGE_SIZE_UNSELECTED,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }

    if (thisSelected) {
        selectImage();
    } else {
        unSelectImage();
    }

    return (
        <Pressable style={[
            styles.container, 
            {opacity: (thisSelected || !otherSelected) ? 1 : 0.6}
        ]}
            onPress={() => {
                if (!thisSelected) {
                    setSelectedItem(name);
                } else {
                    setSelectedItem(null);
                }
            }}
        >
            <Animated.Image style={[styles.image, {transform: [{scale: imageSize}]}]} source={img}/>
            <Text style={styles.text}>{name}</Text>
            {subheader != null && subheader}
            
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
        flex: 1,
        padding: 10,
    },
    image: {
        width: "65%",
        aspectRatio: 1,
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        wordBreak: "break-word",
    },
})