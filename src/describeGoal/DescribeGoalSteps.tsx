import HeadedNavigation from "components/HeadedNavigation";
import { useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { GlobalContext } from "Store";


export default ({ navigation }) => {
    const [context, setContext] = useContext(GlobalContext);

    const everythingFilled = context.goalFirstStep
        && context.goalSecondStep
        && context.goalThirdStep
        && context.goalFourthStep;

    const _navigation = {
        navigateNextDisabled: !everythingFilled,
        navigateNext: () => navigation.navigate("GoalConfigurationFinished"),
        navigatePrev: () => navigation.navigate("DescribeGoalAdditional")
    }

    return (
        <HeadedNavigation
            header="Шаг 5 из 5"
            subHeader={"Цель: " + "\n" + context.goalDescription + "\n\nРазбей цели на шаги"}
            navigation={_navigation}>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Первым делом нужно"
                    onChangeText={(input) => setContext({ ...context, goalFirstStep: input })}
                    value={context.goalFirstStep}
                />

                <TextInput style={styles.input}
                    placeholder="Затем я сделаю"
                    onChangeText={(input) => setContext({ ...context, goalSecondStep: input })}
                    value={context.goalSecondStep}
                />


                <TextInput style={styles.input}
                    placeholder="Продолжу тем, что"
                    onChangeText={(input) => setContext({ ...context, goalThirdStep: input })}
                    value={context.goalThirdStep}
                />


                <TextInput style={styles.input}
                    placeholder="И наконец"
                    onChangeText={(input) => setContext({ ...context, goalFourthStep: input })}
                    value={context.goalFourthStep}
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
    },
    image: {
        width: 23,
        height: 22,
        position: 'absolute',
        right: 17,
        top: 13
    },
    inputDate: {
        flexDirection: 'row'
    }
})