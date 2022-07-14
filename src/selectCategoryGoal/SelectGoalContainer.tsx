import { useState, useContext } from "react";
import SelectItemScreen from "selectCategoryGoal/SelectItemScreen"
import goals from "const/goals";
import { GlobalContext } from "Store";

export default ({navigation}) => {
    const [context, setContext] = useContext(GlobalContext);
    // const [selectedGoal, setSelectedGoal] = useState(null);
    const _goals = {
        all: goals,
        selected: context.selectedGoal,
        setSelected: (goal) => setContext((_context) => (
            {..._context, selectedGoal: goal}
        ))
        // setSelected: setSelectedGoal
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