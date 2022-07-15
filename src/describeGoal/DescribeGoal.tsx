import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import HeadedNavigation from "components/HeadedNavigation"
import { useContext, useState } from "react";
import { GlobalContext } from "Store";
import DatePicker from 'react-native-neat-date-picker';


export default ({navigation}) => {
    const [context, setContext] = useContext(GlobalContext);
    const [calendarIsDisplayed, setCalendarDisplayed] = useState(false);

    if (!context.goalDescription) {
      setContext({...context, goalDescription: context.selectedGoal})
    }

    const everythingFilled = context.goalDescription 
        && context.goalCriteria 
        && context.goalDeadline 
        && context.goalReason;

    const _navigation = {
        navigateNextDisabled: !everythingFilled,
        navigateNext: () => navigation.navigate("DescribeGoalAdditional"),
        navigatePrev: () => navigation.navigate("SelectGoal")
    }
    const onCalendarChange = (output) => {
      const currentDate = output.dateString || new Date();
      setContext({...context, goalDeadline: currentDate});
      setCalendarDisplayed(false);
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

                <View style={styles.inputDate}>
                <TextInput style={styles.input} 
                  placeholder="Поставь себе дедлайн" 
                  onChangeText={(input) => setContext({...context, goalDeadline: input})}
                  value={context.goalDeadline}
                />
                <TouchableOpacity
                  onPress={() => setCalendarDisplayed(true)}>
                    <Image
                      source={require('assets/calendar.png')}
                      style={styles.image}
                    />
                </TouchableOpacity>
              </View>

                <TextInput style={styles.input} 
                  placeholder="Для чего тебе добиваться цели?" 
                  onChangeText={(input) => setContext({...context, goalReason: input})}
                  value={context.goalReason}
                />

                <DatePicker
                  isVisible={calendarIsDisplayed}
                  mode="single"
                  onConfirm={onCalendarChange}
                  onCancel={()=>setCalendarDisplayed(false)}
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