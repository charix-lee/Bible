import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bible } from '../page/Bible';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const TabNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Bible"
        screenOptions={{
          headerTitleStyle: {
            color: '#000',
            fontFamily: 'spoqaBold',
            fontSize: 18,
          },
          headerTintColor: '#000',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          key={'screen-' + 'bible'}
          name={'Bible'}
          component={Bible}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
