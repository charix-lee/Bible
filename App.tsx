/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigation } from './src/component/TabNavigation';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   backgroundColor: '#58577E',
  //   flex: 1
  // };
  // const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
