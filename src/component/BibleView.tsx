import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Chang01 } from './Constant';
import { getBibleList } from './utils/BibleService';

export const BibleView = ({content}: {content: string[]}) => {
  console.log(content)
  return (
    <ScrollView style={styles.frame}>
      {content.map((item,) =>
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
