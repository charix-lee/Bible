import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { getBibleList } from './utils/BibleService';

export const BibleList = () => {

  useEffect(() => {
    getBibleList().then((v: any) => console.log(v))
  });
  return (
    <ScrollView>

    </ScrollView>

  )
}
