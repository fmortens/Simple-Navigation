import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

export default class Settings extends React.Component {
  static navigationOptions = { title: 'Settings' };

  render() {
    const { navigation: { goBack } } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Text>This is the settings page</Text>
        <Text>Maybe a flatlist with clickable elements?</Text>
        <Button onPress={() => goBack()} title="Back" />
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
