import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { FirstScreen, SecondScreen } from "components/IntroComponents";
import ChatScreen from "screens/ChatScreen";
import CoinsScreen from "screens/CoinsScreen";
import GoalScreen from "screens/GoalScreen";
import NewsScreen from "screens/NewsScreen";
import ProfileScreen from "screens/ProfileScreen";
import { Image, Animated } from "react-native";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBarChart } from '@fortawesome/free-regular-svg-icons/faBarChart'
import {useRef} from "react";

const goalIcon = require("assets/navigation/goal.png");
const messageIcon = require("assets/navigation/message.png");
const newsIcon = require("assets/navigation/news.png");
const pigIcon = require("assets/navigation/pig.png");
const userIcon = require("assets/navigation/user.png");

const Tab = createBottomTabNavigator();
const IMAGE_SIZE_SELECTED = 2;
const IMAGE_SIZE_UNSELECTED = 1;

export default ({navigation}) => {
    const imageSize = useRef(
        new Animated.Value(IMAGE_SIZE_UNSELECTED)
    ).current;

    const selectImage = () => {
        Animated.timing(imageSize, {
            toValue: IMAGE_SIZE_SELECTED,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }
    const unSelectImage = () => {
        Animated.timing(imageSize, {
            toValue: IMAGE_SIZE_UNSELECTED,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }

    return (
        <Tab.Navigator
        initialRouteName="Goal"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                borderRadius: 10,
                shadowColor: '#000', 
                shadowOffset: { width: 0, height: 3 }, 
                shadowOpacity: 0.3,
                shadowRadius: 15
            },
            }}
        >
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Image source={userIcon} 
                    style={[
                        {height: 24, width: 24}, 
                        focused && {transform: [{scale: 1.5}]}
                    ]} />
                }
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Image source={messageIcon} style={[
                        {height: 24, width: 24}, 
                        focused && {transform: [{scale: 1.5}]}
                    ]} />
                }
            }}/>
            <Tab.Screen name="Goal" children={() => <GoalScreen navigation={navigation} />} options={{
                tabBarIcon: ({focused}) => {
                    // return <FontAwesomeIcon icon="mug-saucer"/>
                    return <Image source={goalIcon} style={[
                        {height: 32, width: 32}, 
                        focused && {transform: [{scale: 1.4}]}
                    ]} />
                }
            }}/>
            <Tab.Screen name="News" component={NewsScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Image source={newsIcon} style={[
                        {height: 24, width: 32}, 
                        focused && {transform: [{scale: 1.5}]}
                    ]} />
                }
            }}/>
            <Tab.Screen name="Coins" component={CoinsScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Image source={pigIcon} style={[
                        {height: 24, width: 24}, 
                        focused && {transform: [{scale: 1.5}]}
                    ]} />
                }
            }}/>
        </Tab.Navigator>
    )
}