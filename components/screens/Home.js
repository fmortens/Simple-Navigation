import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigation: { navigate } } = this.props;

    const test = 4 + 5 + 5;

    const testArray = [1, 2, 3, 4, 5, 6];

    const newObject = {
      a: 'a.m.',
      b: 'p.m.',
      c: 'daylight saving time',
    };

    return (
      <SafeAreaView style={styles.container}>
        <Text>This is the home screen</Text>
        <Button
          title="Settings screen"
          onPress={() => {
            navigate('Settings');
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
