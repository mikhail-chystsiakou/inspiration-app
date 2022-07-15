import { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import HeadedNavigation from "components/HeadedNavigation"
import { GlobalContext } from "Store";

export default ({navigation}) => {
    const [context, setContext] = useContext(GlobalContext);

    const _navigation = {
        navigateNext: () => {navigation.navigate("GoalScreen")},
        navigateNextLabel: "Перейти к каналам",
    }
    return (
        <HeadedNavigation
          header="Поздравляем!"
          subHeader="Цель сформулирована, через 2е суток с тобой свяжется ментор"
          navigation={_navigation}
        >
            <View style={styles.imageContainer}>
                <View style={{flex: 1}}>
                    <Image style={styles.image} source={require("assets/intro/gomer.png")}/>

                </View>
                {/* <Text style={styles.smallText}>Категория: {context.selectedCategory}</Text>
                <Text style={styles.smallText}>Цель: {context.selectedGoal}</Text>
                <Text style={styles.smallText}>Описание: {context.goalDescription}</Text>
                <Text style={styles.smallText}>Критерии достижения: {context.goalCriteria}</Text>
                <Text style={styles.smallText}>Дедлайн: {context.goalDeadline}</Text>
                <Text style={styles.smallText}>Зачем: {context.goalReason}</Text> */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Пока можешь почитать полезные каналы по своей теме</Text>
                </View>
            </View>
        </HeadedNavigation>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
    },
    image: {
        width: 250,
        height: 200,
        marginLeft: 40,
        marginVertical: "auto",
        // flex: 1,
    },
    textContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400",
    },
    smallText: {
        textAlign: "left",
        fontSize: 8
    }
})