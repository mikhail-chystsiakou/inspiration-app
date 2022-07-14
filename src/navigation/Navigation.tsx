import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SelectCategoryContainer from "selectCategoryGoal/SelectCategoryContainer"
import SelectGoalContainer from "selectCategoryGoal/SelectGoalContainer"
import DescribeGoal from "describeGoal/DescribeGoal";
import GoalConfigurationFinished from "describeGoal/GoalConfigurationFinished";

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

export default () => {
    return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SelectCategory" component={SelectCategoryContainer} />
            <Stack.Screen name="SelectGoal" component={SelectGoalContainer} />
            <Stack.Screen name="DescribeGoal" component={DescribeGoal} />
            <Stack.Screen name="GoalConfigurationFinished" component={GoalConfigurationFinished} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}