/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Bible} from './src/page/Bible';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#58577E',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.red}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          width: '100%',
          height: '100%',
          // backgroundColor: 'blue',
        }}>
        {/*<Header />*/}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            width: '100%',
            height: '100%',
          }}>
          <Bible></Bible>
          {/*<Section title="Step One">*/}
          {/*  Edit <Text style={styles.highlight}>App.tsx</Text> to change this*/}
          {/*  screen and then come back to see your edits.*/}
          {/*</Section>*/}
          {/*<Section title="See Your Changes">*/}
          {/*  <ReloadInstructions />*/}
          {/*</Section>*/}
          {/*<Section title="Debug">*/}
          {/*  <DebugInstructions />*/}
          {/*</Section>*/}
          {/*<Section title="Learn More">*/}
          {/*  Read the docs to discover what to do next:*/}
          {/*</Section>*/}
          {/*<LearnMoreLinks />*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
