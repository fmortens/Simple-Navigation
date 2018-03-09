import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;

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
    justifyContent: 'center'
  }
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
