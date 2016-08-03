import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
var ListStore = require('../stores/ListStore');

class MyListView extends Component {
  // 初始化伪数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(() => _getData())
    };
  }
  render() {
    var items = ListStore.getAll().items;
    return (
      <View style={{paddingTop: 2, backgroundColor:'#63B8FF'}}>
        <ListView
          dataSource={ new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(items) }
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }

  _getData(){
    return ListStore.getAll().items;
  }
}

//new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(items)
module.exports = MyListView;