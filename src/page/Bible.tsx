import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../component/Header';

export const Bible = () => {
  return (
    <View style={styles.background}>
      <Header title='창세기 1장'/>
      <Text>hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {

  },
})
