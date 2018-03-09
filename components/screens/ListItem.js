import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

export default class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { item, handleClick } = this.props;

    handleClick(item);
  }

  render() {
    const { item } = this.props;
    const itemStyle = item.key % 2 ? styles.oddItem : styles.evenItem;

    return (
      <TouchableHighlight onPress={this.handleClick}>
        <View style={itemStyle}>
          <View style={styles.itemHead}>
            <Text style={styles.itemHeadText}>{item.key}</Text>
          </View>
          <Text style={styles.listItemText}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const black = '#000';
const white = '#fff';
const gray = '#efefef';
const gray2 = '#ddd';

const styles = StyleSheet.create({
  evenItem: {
    flex: 1,
    alignItems: 'center',
    minHeight: 100,
    flexDirection: 'row',
    backgroundColor: white
  },
  oddItem: {
    flex: 1,
    alignItems: 'center',
    minHeight: 100,
    flexDirection: 'row',
    backgroundColor: gray
  },
  itemHead: {
    height: '100%',
    width: 100,
    borderColor: gray2,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemHeadText: { fontSize: 70 },
  listItemText: {
    flex: 1,
    padding: 5,
    fontSize: 48
  }
});

ListItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};
