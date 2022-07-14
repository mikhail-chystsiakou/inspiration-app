import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ItemPreview from 'selectCategoryGoal/ItemPreview'
import HeadedNavigation from 'components/HeadedNavigation';

export default ({header, subHeader, items, navigation}) => {
    return (
        <HeadedNavigation 
         header={header}
         subHeader={subHeader}
         navigation={navigation}
         >
            <View style={styles.items}>
             {items.all.map(c => {
                 return (
                   <ItemPreview key={c.name} 
                     name={c.name} img={c.img}
                     selectedItem={items.selected}
                     setSelectedItem={items.setSelected}
                   />
                 )
             })
         }
         </View>
            </HeadedNavigation>
    )
}

const styles = StyleSheet.create({
    items: {
        flexWrap: "wrap",
        flexDirection: "row",
        flexGrow: 1,
        flexBasis: "0px",
        flexShrink: 1,
    },
});