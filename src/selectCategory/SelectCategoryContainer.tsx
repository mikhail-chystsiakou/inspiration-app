import { View, Text } from "react-native";
import SelectCategory from "./selectCategory"
import categories from "const/categories";

export default () => {

    return (
        <SelectCategory categories={categories}/>
    )
}