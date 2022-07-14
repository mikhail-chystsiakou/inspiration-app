import { useState } from "react";
import SelectItemScreen from "selectCategoryGoal/SelectItemScreen"
import goals from "const/goals";

export default ({navigation}) => {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const _goals = {
        all: goals,
        selected: selectedGoal,
        setSelected: setSelectedGoal
    }
    const _navigation = {
        navigateNext: () => navigation.navigate("SelectCategory"),
        navigatePrev: () => navigation.navigate("SelectCategory")
    }
    return (
        <SelectItemScreen
          header="Шаг 2 из 5"
          subHeader="Какая у тебя цель?"
          navigation={_navigation}
          items={_goals}
        />
    )
}