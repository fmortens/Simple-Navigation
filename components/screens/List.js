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
        length: 100
      })
      .map((item, index) => ({
        key: index,
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
        renderItem={this.renderItem}
        style={styles.list}
        initialNumToRender={20}
        getItemLayout={(data, index) => ({
          length: 50,
          offset: 50 * index,
          index
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fefefe'
  }
});
