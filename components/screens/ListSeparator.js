import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default () => <View style={styles.listSeparator} />;

const styles = StyleSheet.create({
  listSeparator: {
    height: 1,
    backgroundColor: '#ddd'
  }
});
