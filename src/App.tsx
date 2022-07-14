import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Store from "Store"
import Navigation from 'navigation/Navigation';
import TabNavigation from "navigation/TabNavigation";
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";


library.add(far)

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

function App() {
    return (
      <SafeAreaProvider>
        <Store>
          <NavigationContainer theme={MyTheme}>
          {/* <TabNavigation/> */}
          <Navigation/>
          </NavigationContainer>
        </Store>
        <StatusBar />
      </SafeAreaProvider>
    );
}

registerRootComponent(App);