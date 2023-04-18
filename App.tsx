/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigation } from './src/component/TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { BibleList } from './src/component/BibleList';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   backgroundColor: '#58577E',
  //   flex: 1
  // };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <TabNavigation />
      <Stack.Navigator>
        {/*<Stack.Screen name={'List'} component={BibleList}/>*/}
        {/*<Stack.Screen name={'List'} component={BibleList}/>*/}
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
