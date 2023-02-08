import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Header = ({title}:{ title: string }) => {
  return (
    <View style={styles.frame}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: 76,
    display: 'flex',
    justifyContent: 'center',
    color: 'red',
    // background: 'linear-gradient(180deg, #58577E 62.5%, rgba(88, 87, 126, 0.828125) 79.17%, rgba(88, 87, 126, 0.625) 89.58%, rgba(88, 87, 126, 0) 100%)'
    backgroundColor: '#58577E',
    paddingLeft: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  text: {
    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 28,
    color: 'white',
  },
});
