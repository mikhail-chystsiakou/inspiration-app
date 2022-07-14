import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ItemPreview from 'selectCategoryGoal/ItemPreview'

export default ({header, subHeader, items, navigateNext}) => {
    const buttonEnabled = items.selected != null;
    return (
        <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subHeader}>{subHeader}</Text>
        <View style={styles.items}>
            {items.all.map(c => {
                return (
                  <ItemPreview key={c.name} 
                    name={c.name} img={c.img}
                    selectedItem={items.selected}
                    setSelectedItem={items.setSelected}
                  />
                )
            })
        }
        </View>
        <TouchableOpacity 
          disabled={!buttonEnabled} 
          style={[
            styles.button, 
            buttonEnabled && styles.buttonEnabled
          ]}
          onPress={navigateNext}>
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
    items: {
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