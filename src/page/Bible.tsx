import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FixedHeader } from '../component/Header';
import { BibleView } from '../component/BibleView';
import { getBibleList } from '../component/utils/BibleService';
import { Chang01 } from '../component/Constant';

export const Bible = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getBibleList().then((v: any) => setList(v));
  });

  return (
    <ScrollView style={styles.background}>
      {/*<BibleView content={Chang01}/>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    // width: '100%',
    // height: '100%',
    // height: 100,
    // position: 'relative',
    flex: 1,
  },
});
