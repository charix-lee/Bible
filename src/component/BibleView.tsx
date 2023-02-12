import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Chang01 } from './Constant';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const BibleView = () => {
  const screenHeight = Dimensions.get("window").height - 170;
  const backgroundStyle = {
    backgroundColor: Colors.white,
    paddingTop: 26,
    maxHeight: screenHeight,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior={'automatic'}
      style={backgroundStyle}
    >
      <View style={styles.body}>
        {Chang01.map((item, index) =>
          <Text style={styles.text}>{item}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
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
