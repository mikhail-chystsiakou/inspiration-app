import { View, Text, TextInput, StyleSheet } from "react-native";
import HeadedNavigation from "components/HeadedNavigation"
import { useContext } from "react";
import { GlobalContext } from "Store";


export default ({navigation}) => {
    const [context, setContext] = useContext(GlobalContext);


    const everythingFilled = context.goalDescription 
        && context.goalCriteria 
        && context.goalDeadline 
        && context.goalReason;

    console.log(context);
    const _navigation = {
        navigateNextDisabled: !everythingFilled,
        navigateNext: () => navigation.navigate("GoalConfigurationFinished"),
        navigatePrev: () => navigation.navigate("SelectGoal")
    }
    return (
        <HeadedNavigation
          header="Шаг 3 из 5"
          subHeader="Расскажи подробнее о цели"
          navigation={_navigation}>
            <View style={styles.container}>
                <TextInput style={styles.input} 
                  placeholder="Какая у тебя цель?" 
                  onChangeText={(input) => setContext({...context, goalDescription: input})}
                  value={context.goalDescription}
                />

                <TextInput style={styles.input} 
                  placeholder="Как можно измерить успех?" 
                  onChangeText={(input) => setContext({...context, goalCriteria: input})}
                  value={context.goalCriteria}
                />

                <TextInput style={styles.input} 
                  placeholder="Поставь себе дедлайн" 
                  onChangeText={(input) => setContext({...context, goalDeadline: input})}
                  value={context.goalDeadline}
                />

                <TextInput style={styles.input} 
                  placeholder="Для чего тебе добиваться цели?" 
                  onChangeText={(input) => setContext({...context, goalReason: input})}
                  value={context.goalReason}
                />
            </View>
        </HeadedNavigation>
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