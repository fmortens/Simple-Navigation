import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.listItemHead}>
      <Text style={styles.listItemHeadText}>{item.index}</Text>
    </View>
    <Text style={styles.listItemText}>{item.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemText: {
    flex: 1,
    padding: 5
  }
});

ListItem.propTypes = {
  item: PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ListItem;
