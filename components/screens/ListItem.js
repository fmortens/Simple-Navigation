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
    const {
      item,
      handleClick,
    } = this.props;

    handleClick(item);
  }

  render() {
    const {
      item,
    } = this.props;

    return (
      <TouchableHighlight onPress={this.handleClick}>
        <View style={styles.listItem}>
          <View style={styles.listItemHead}>
            <Text style={styles.listItemHeadText}>{item.key}</Text>
          </View>
          <Text style={styles.listItemText}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    alignItems: 'center',
    minHeight: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  listItemHead: {
    height: '100%',
    width: 100,
    borderColor: '#ddd',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemHeadText: {
    fontSize: 50
  },
  listItemText: {
    flex: 1,
    padding: 5,
    fontSize: 24
  }
});

ListItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};
