import React from 'react';

import {
  FlatList,
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {
  ListItem,
  ListSeparator
} from './';

export default class List extends React.Component {
  static navigationOptions = {
    title: 'List'
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      selectedItem: {}
    };

    this.showItem = this.showItem.bind(this);
    this.closeItem = this.closeItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillMount() {
    this.listContent = Array
      .from({
        length: 100
      })
      .map((item, index) => ({
        key: index,
        name: `Item #${index + 1}`,
      }));
  }

  showItem(item) {
    this.setState({
      modalVisible: true,
      selectedItem: item
    });
  }

  closeItem() {
    this.setState({
      modalVisible: false,
      selectedItem: {}
    });
  }

  renderItem({ item }) {
    return <ListItem item={item} handleClick={this.showItem} />;
  }

  renderListSeparator() {
    return <ListSeparator />;
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <TouchableWithoutFeedback onPress={this.closeItem}>
            <View style={styles.modalView}>
              <Text style={styles.modalViewText}>Now viewing: {this.state.selectedItem.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <FlatList
          data={this.listContent}
          ItemSeparatorComponent={this.renderListSeparator}
          renderItem={this.renderItem}
          style={styles.list}
          initialNumToRender={6}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fefefe'
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalViewText: {
    fontSize: 26,
    textAlign: 'center'
  }
});
