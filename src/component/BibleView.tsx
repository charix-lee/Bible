import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Chang01 } from './Constant';

export const BibleView = () => {
  return (
    <ScrollView style={styles.frame}>
      {Chang01.map((item,) =>
        <Text style={styles.text}>{item}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: '100%',
    zIndex: 100,

    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 17,
    color: 'balck',
    lineHeight: 28,
    marginBottom: 15,
  },
});
