import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getBibleList } from './utils/BibleService';

export const BibleList = () => {
  const [list, setList] = useState<any>([]);
  const [bible, setBible] = useState('창세기');
  useEffect(() => {
    getBibleList().then((v: any) => {
      // console.log(v)
      setList(v);
    });
  }, []);

  useEffect(() => {
    // console.log(list.find((v: any) => v.kr_long === bible).verse_count);
  }, [bible])
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View>
        <View style={styles.bible}>
          <View style={styles.bible_title}>
            <Text style={styles.bible_title_text}>성경</Text>
          </View>
          {list.map((item: any, index: number) =>
            <View style={[styles.bible_list, item.kr_long === bible && styles.bible_list__selected]}>
              <Text key={'bible_' + index} style={[styles.bible_list_text, item.kr_long === bible && styles.bible_list_text__selected]}>{item.kr_long}</Text>
            </View>
          )}
        </View>
        <View>
          <View>
            <Text>장</Text>
            {/*<Text>{String(list.find((v: any) => v.kr_long === bible).verse_count)}</Text>*/}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frame: {},
  bible: {
    width: 216,
    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 20,
    color: 'black',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    borderRightColor: 'rgba(100, 100, 100, 0.2)',
    borderRightWidth: 0.5,
    borderStyle: 'solid',
  },
  bible_title: {
    width: '100%',
    height: 28,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bible_title_text: {
    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 15,
  },
  bible_list: {
    width: 200,
    height: 40,

    borderColor: 'rgba(100, 100, 100, 0.2)',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',

    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',

    paddingLeft: 23,
  },
  bible_list__selected: {
    backgroundColor: 'rgba(88, 87, 126, 0.5)',

    borderColor: 'transparent',
  },
  bible_list_text: {

    fontFamily: 'GangwonEduAll-OTFLight',
    fontSize: 15,
    // ':hover': {
    //   backgroundColor: 'black',
    // },
  },
  bible_list_text__selected: {
    color: 'white',
  },
});
