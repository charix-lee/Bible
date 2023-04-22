import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BibleList } from './BibleList';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export const TabNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Bible"
        screenOptions={{
          // headerTitle: '창세기',
          // headerTitleAlign: 'right',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'GangwonEduAll-OTFBold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#58577E',
          },
          headerTintColor: '#000',
          headerShadowVisible: false,
          headerTitle: () =>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              paddingBottom: 10,
            }}>
              <Text style={{
                color: '#fff',
                fontFamily: 'GangwonEduAll-OTFBold',
                fontSize: 20,
              }}>
                성경 선택
              </Text>
            </View>
        }}
      >
        <Stack.Screen name={'List'} component={BibleList} />
        {/*<Stack.Screen*/}
        {/*  key={'screen-' + 'bible'}*/}
        {/*  name={'Bible'}*/}
        {/*  component={Bible}*/}
        {/*  options={{*/}
        {/*    headerShown: true,*/}
        {/*  }}*/}
        {/*/>*/}
      </Stack.Navigator>
    </>
  );
};
