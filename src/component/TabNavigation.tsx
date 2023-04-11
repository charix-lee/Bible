import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bible } from '../page/Bible';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#000',
          fontFamily: 'spoqaBold',
          fontSize: 18
        },
        headerTintColor: '#000',
        headerShadowVisible: false
      }}
    >

      <Tab.Screen
        key={'screen-' + 'item.name'}
        name={'item.name'}
        component={Bible}
        options={{
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'spoqaBold',
            fontSize: 12,
            lineHeight: 15,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarLabel: 'item.title',
          // tabBarIcon: ({ focused }) => (
          //   <>
          //     {/*<item.Icon color={focused ? '#006AFF' : '#D1D6DA'}/>*/}
          //   </>
          // ),
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      />
    </Tab.Navigator>
  );
};
