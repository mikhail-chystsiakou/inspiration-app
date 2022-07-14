import { useState } from "react";
import SelectItemScreen from "selectCategoryGoal/SelectItemScreen"
import categories from "const/categories";

export default ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const _categories = {
      all: categories,
      selected: selectedCategory,
      setSelected: setSelectedCategory
    }
    const _navigation = {
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