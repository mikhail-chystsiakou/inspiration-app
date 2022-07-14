import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Store from "Store"
import Navigation from 'navigation/Navigation';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <SafeAreaProvider>
        <Store>
          <Navigation/>
        </Store>
        <StatusBar />
      </SafeAreaProvider>
    );
}

registerRootComponent(App);