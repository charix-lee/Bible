import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../component/Header';
import { BibleView } from '../component/BibleView';

export const Bible = () => {
  return (
    <View style={styles.background}>
      <Header title="창세기 1장" />
      <BibleView />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    // height: 100,
    position: 'relative',
    flex: 1,
  },
})
