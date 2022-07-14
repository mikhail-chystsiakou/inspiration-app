
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, StyleSheet, Image, Button, TouchableHighlight  } from 'react-native';
import HeadedNavigation from './HeadedNavigation';

import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = ({navigation, subHeader, image, nextScreen}) => {
    const _navigation = {
        navigateNext: () => navigation.navigate(nextScreen),
      }
  
    return (
        <HeadedNavigation
          header="Привет, дорогой друг!"
          subHeader={subHeader}
          navigation={_navigation}>

            <Image source={image} style={styles.image}/>

        </HeadedNavigation>
    );
}

export function FirstScreen({navigation}) { 
    return (
        <IntroScreen
          subHeader="Отсюда начинается твоя игра по достижению заветной цели."
          navigation={navigation}
          image={require('assets/intro/1.png')}
          nextScreen="SecondScreen"
          />
    );
}

export function SecondScreen({navigation}) { 
    return (
        <IntroScreen
          subHeader="На каждом шаге. Ты зарабатываешь монеты, которые можно тратить в супермаркете идей."
          navigation={navigation}
          image={require('assets/intro/2.png')}
          nextScreen="ThirdScreen"
          />
    );
}


export function ThirdScreen({navigation}) { 
    return (
        <IntroScreen
          subHeader="Добейся своей цели. Мы верим в тебя!"
          navigation={navigation}
          image={require('assets/intro/3.png')}
          nextScreen="SelectCategory"
          />
    );
}


const styles = StyleSheet.create({
  image : {
    width: 250, 
    height: 250, 
    marginBottom: "50px",
    resizeMode: 'contain',
    alignSelf: 'center',
    flex: 1,
    alignItems: "flex-start",
}
})
