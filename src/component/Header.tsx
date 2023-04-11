// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// export const Header = ({ title }: { title: string }) => {
//   return (
//     <View style={styles.frame}>
//       <Text style={styles.text}>{title}</Text>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   frame: {
//     width: '100%',
//     height: 76,
//     display: 'flex',
//     justifyContent: 'center',
//     color: 'red',
//     // background: 'linear-gradient(180deg, #58577E 62.5%, rgba(88, 87, 126, 0.828125) 79.17%, rgba(88, 87, 126, 0.625) 89.58%, rgba(88, 87, 126, 0) 100%)'
//     backgroundColor: '#58577E',
//     paddingLeft: 30,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     alignSelf: 'flex-end',
//     zIndex: 100,
//   },
//   text: {
//     fontFamily: 'GangwonEduAll-OTFBold',
//     fontSize: 28,
//     color: 'white'
//   }
// });

import React, { useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

export const FixedHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 50], // Adjust the second value to change when the header becomes fixed
    outputRange: [0, -50], // Adjust the second value to change how far the header moves up when it becomes fixed
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Text style={styles.text}>This is a fixed header</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default FixedHeader;
