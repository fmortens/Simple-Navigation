import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';

export default class List extends React.Component {
  static navigationOptions = {
    title: 'List'
  };

  constructor(props) {
    super(props);
    this.listContent = null;
  }

  componentWillMount() {
    this.listContent = Array.from({
      length: 10
    }).map((item, index) => ({
      index,
      name: `Item ${index}`,
    }));
  }

  renderItem(item) {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemHead}>
          <Text style={styles.listItemHeadText}>{item.index}</Text>
        </View>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    );
  }

  renderListSeparator() {
    return (
      <View style={styles.listSeparator}>
        <View style={styles.listSeparatorHead} />
        <View style={styles.listSeparatorContent} />
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.listContent}
        ItemSeparatorComponent={this.renderListSeparator}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        style={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fefefe'
  },
  listItem: {
    alignItems: 'center',
    minHeight: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  listItemHead: {
    height: '100%',
    width: 50,
    borderColor: '#ddd',
    borderRightWidth: 1,
  },
  listItemText: {

  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});
