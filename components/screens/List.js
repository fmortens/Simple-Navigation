import React from 'react';

import {
  FlatList,
  StyleSheet
} from 'react-native';

import {
  ListItem,
  ListSeparator
} from './';

export default class List extends React.Component {
  static navigationOptions = {
    title: 'List'
  };

  componentWillMount() {
    this.listContent = Array
      .from({
        length: 20
      })
      .map((item, index) => ({
        index,
        name: `Item ${index}`,
      }));
  }

  renderItem({ item }) {
    return <ListItem item={item} />;
  }

  renderListSeparator() {
    return <ListSeparator />;
  }

  render() {
    return (
      <FlatList
        data={this.listContent}
        ItemSeparatorComponent={this.renderListSeparator}
        keyExtractor={(item, index) => index}
        renderItem={this.renderItem}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fefefe'
  }
});
