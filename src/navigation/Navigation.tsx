import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SelectCategoryContainer from "selectCategoryGoal/SelectCategoryContainer"
import SelectGoalContainer from "selectCategoryGoal/SelectGoalContainer"
import DescribeGoal from "describeGoal/DescribeGoal";
import DescribeGoalAdditional from "describeGoal/DescribeGoalAdditional";
import DescribeGoalSteps from "describeGoal/DescribeGoalSteps";
import GoalConfigurationFinished from "describeGoal/GoalConfigurationFinished";
import { FirstScreen, SecondScreen, ThirdScreen } from "components/IntroComponents";
import GoalScreen from "screens/GoalScreen";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SelectCategory" component={SelectCategoryContainer} />
            <Stack.Screen name="SelectGoal" component={SelectGoalContainer} />
            <Stack.Screen name="DescribeGoal" component={DescribeGoal} />
            <Stack.Screen name="DescribeGoalAdditional" component={DescribeGoalAdditional} />
            <Stack.Screen name="DescribeGoalSteps" component={DescribeGoalSteps} />
            <Stack.Screen name="GoalConfigurationFinished" component={GoalConfigurationFinished} />
            <Stack.Screen name="GoalScreen" component={TabNavigation} />
        </Stack.Navigator>
    )
}