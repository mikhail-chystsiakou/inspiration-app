import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CategoryPreview from 'selectCategory/CategoryPreview'

export default ({categories}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const buttonEnabled = selectedCategories.length > 0;
    return (
        <View style={styles.container}>
        <Text style={styles.stepNo}>Шаг 1 из 5</Text>
        <Text style={styles.selectCategory}>Выберите категорию</Text>
        <View style={styles.categories}>
            {categories.map(c => {
                return (
                  <CategoryPreview key={c.name} name={c.name} img={c.img}
                    selected={selectedCategories.includes(c.name)}
                    setSelectedCategories={setSelectedCategories}
                  />
                )
            })
        }
        </View>
        <TouchableOpacity disabled={!buttonEnabled} style={[
            styles.button, 
            buttonEnabled && styles.buttonEnabled
            ]}>
            <Text style={styles.buttonText}>Далее</Text>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    stepNo: {
        marginTop: 30,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500",
    },
    selectCategory: {
        marginVertical: 30,
        fontSize: 16,
        textAlign: "center",
        fontWeight: "400",
    },
    categories: {
        flexWrap: "wrap",
        flexDirection: "row",
        flexGrow: 1,
        flexBasis: "0px",
        flexShrink: 1,
    },
    button: {
        backgroundColor: "#B2D6FF",
        borderRadius: 10,
        margin: 10,
        paddingVertical: 13,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowRadius: 5,
        shadowOffset : { width: 1, height: 5},
    },
    buttonEnabled: {
        backgroundColor: "#64ACFF",
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
    }
});