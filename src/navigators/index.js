//@flow
import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomeScreen';
import VariationScreen from '../screens/variationScreen';
import ThankyouScreen from '../screens/thankyouScreen';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

function navigators() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Welcome" headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Variation" component={VariationScreen} options={{headerShown:false}} />
        <Stack.Screen name="ThankYou" component={ThankyouScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigators;