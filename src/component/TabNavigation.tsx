import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Bible } from '../page/Bible';

const Stack = createNativeStackNavigator();

export const TabNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Bible"
        screenOptions={{
          headerTitleStyle: {
            color: '#000',
            fontFamily: 'GangwonEduAll-OTFBold',
            fontSize: 20,
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
