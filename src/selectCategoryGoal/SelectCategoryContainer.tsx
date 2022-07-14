import React from "react";
import { useState, useContext } from "react";
import SelectItemScreen from "selectCategoryGoal/SelectItemScreen"
import categories from "const/categories";
import {GlobalContext} from "Store";

export function SelectCategoryContainer({navigation}) {
    const [context, setContext] = useContext(GlobalContext);
    const _categories = {
      all: categories,
      selected: context.selectedCategory,
      setSelected: (category) => setContext(_context => (
        {..._context, selectedCategory: category}
      )),
    }
    const _navigation = {
      // allow skip category selection
      // navigateNextDisabled: context.selectedCategory == null, 
      navigateNext: () => navigation.navigate("SelectGoal"),
    }

    return (
        <SelectItemScreen
            header="Шаг 1 из 5"
            subHeader="Выберите категорию"
            navigation={_navigation}
            items={_categories}
          />
    )
}

export default SelectCategoryContainer;