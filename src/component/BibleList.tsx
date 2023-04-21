import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getBibleList } from './utils/BibleService';

export const BibleList = () => {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    getBibleList().then((v: any) => setList(v));
  });
  return (
    <ScrollView>
      <View>
        <View style={styles.bible}>
          <Text style={styles.bible_title}>성경</Text>
          {list.map((item: any, index: number) =>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text key={'bible_' + index} style={styles.bible_list}>{item.kr_long}</Text>
              <View style={{borderColor: 'black', borderStyle: 'solid'}}/>
            </View>
          )}
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  frame: {},
  bible: {
    width: 200,
    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 20,
    color: 'black',

    borderRightColor: 'black',

    backgroundColor: 'red'
  },
  bible_title: {
    width: '100%',

    backgroundColor: 'yellow',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'GangwonEduAll-OTFLight'
  },
  bible_list: {
    height: 50,

    borderColor: 'rgba(100, 100, 100, 0.8)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontFamily: 'GangwonEduAll-OTFLight'
    // ':hover': {
    //   backgroundColor: 'black',
    // },
  }
});
