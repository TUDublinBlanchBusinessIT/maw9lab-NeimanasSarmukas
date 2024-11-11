import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './assets/appstyles';
import {ColorPickerScreen} from './components/colour';
import {RegistrationScreen} from './components/register';

// Create the Tab Navigator
const Tab = createMaterialTopTabNavigator();


// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegistrationScreen} />
        <Tab.Screen name="Favorite Color" component={ColorPickerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


