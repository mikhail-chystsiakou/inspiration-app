import HeadedNavigation from "components/HeadedNavigation";
import { useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { GlobalContext } from "Store";


export default ({ navigation }) => {
    const [context, setContext] = useContext(GlobalContext);

    const everythingFilled = context.goalDescription
        && context.goalCriteria
        && context.goalDeadline
        && context.goalReason;

    const _navigation = {
        navigateNextDisabled: !everythingFilled,
        navigateNext: () => navigation.navigate("DescribeGoalSteps"),
        navigatePrev: () => navigation.navigate("DescribeGoal")
    }

    return (
        <HeadedNavigation
            header="Шаг 4 из 5"
            subHeader={"Цель: " + "\n" + context.goalDescription}
            navigation={_navigation}>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Что ты почувствуешь, если добьешься цели?"
                    onChangeText={(input) => setContext({ ...context, goalFeeling: input })}
                    value={context.goalFeeling}
                />

                <TextInput style={styles.input}
                    placeholder="Что будет, если не станешь пробовать?"
                    onChangeText={(input) => setContext({ ...context, goalNegative: input })}
                    value={context.goalNegative}
                />


                <TextInput style={styles.input}
                    placeholder="От кого тебе пришла эта идея?"
                    onChangeText={(input) => setContext({ ...context, goalFrom: input })}
                    value={context.goalFrom}
                />


                <TextInput style={styles.input}
                    placeholder="Что нужно для ее достижения?"
                    onChangeText={(input) => setContext({ ...context, goalWhatNeed: input })}
                    value={context.goalWhatNeed}
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