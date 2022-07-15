import { Text, View, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import ideasShop from "const/ideasShop"
import ItemPreview from "selectCategoryGoal/ItemPreview";
import { useState } from "react";

const coinIcon = require('assets/shop/coin.png');

export default () => {
    const [selectedItem, setSelectedItem] = useState();
    const items = {
        all: ideasShop,
        selected: selectedItem,
        setSelected: (item) => setSelectedItem(item)
    }
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerText}>Копилка</Text>
            </View> 
            <View style={styles.coinContainer}>
                <Image source={coinIcon} style={styles.coin} />
                <Text style={styles.coinNumber}>0</Text>
            </View>
            <Text style={[styles.suggest, {marginTop: 10}]}>Как заработать?</Text>
            <Text style={styles.shopHeader}>Магазин идей</Text>
            <View style={styles.items}>
                {ideasShop.map(c => {
                    return (
                    <ItemPreview key={c.name} 
                        name={c.name} img={c.img} 
                        subheader={
                            <View style={{marginTop: 5, flexDirection: "row", alignItems: "center"}}>
                                <Image source={coinIcon} style={styles.smallCoin} />
                                <Text style={styles.text}> {c.cost}</Text>
                            </View>
                        }
                        selectedItem={items.selected}
                        setSelectedItem={items.setSelected}
                    />
                    )
                })
            }
         </View>
         <Text style={[styles.suggest]}>Предложить идею</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 20,
        marginTop: 30,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    headerText: {
        fontSize: 18,
        textAlign: "left",
        fontWeight: "500",
    },
    coinContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    coin: {
        width: 24,
        height: 24,
    },
    smallCoin: {
        width: 16,
        height: 16,
    },
    coinNumber: {
        marginLeft: 4,
        fontSize: 24,
    },
    coinText: {
        marginTop: 20,
        marginLeft: 4,
        fontSize: 14,
    },
    shopHeader: {
        marginVertical: 40,
        fontSize: 17,
        textAlign: "center",
        fontWeight: "400",
    },
    items: {
        flexWrap: "wrap",
        flexDirection: "row",
    },
    suggest: {
        color: "#64ACFF",
        textDecorationLine: "underline",
        textAlign: "center",
        marginTop: 30,
    },
    suggestButton: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "black"
    },
})