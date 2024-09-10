import {View} from 'react-native';
import React from 'react';
import styles from '../../style/generalStyle';

export default function ScreenWrapper({ children }) {
  return (
      <View style={styles.container}>
        {children}
      </View>
  )
}