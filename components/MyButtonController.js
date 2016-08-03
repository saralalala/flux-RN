var React = require('react');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from'react-native';
// 引入数据层
var ListStore = require('../stores/ListStore');
// 引入动作层
var ButtonActions = require('../actions/ButtonActions');
var MyListView = require('./MyListView');
import Button from 'react-native-button';

var MyButtonController = React.createClass({

  getInitialState: function () {
    console.log('getinit');
    return {
      data: ListStore.getAll().data,
      items: ListStore.getAll().items
    };
  },

  componentWillMount: function () {
    console.log('component will mount');
  },

  componentDidMount: function () {
    console.log('component did mount');
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    console.log('component will unmount');
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      data: ListStore.getAll().data,
      items: ListStore.getAll().items
    });
    console.log(' get data' + ListStore.getAll().data);
  },

  // view把用户的动作传给action。新增一个数据
  createNewItem: function () {

    //var text=this.refs.myInput.value;
    var text = '增加 一条数据！';
    if (text !== '') {
      // 这个是action里面的函数 ，用户通过这个点击事件，告诉action,我点击了增加了按钮了
      ButtonActions.addNewItem(text);
      // this.refs.myInput.value='';

    } else {

      // alert('请输入内容');
    }
  },

  // 删除元素，告诉action，我点击了删除按钮
  deleteItem: function () {
    var text = '点击 删除按钮！';
    ButtonActions.delete(text);
  },

  render: function () {
    // 将事件传给这个组件的子组件，MyButton
    var text = this.state.data;
    console.log('render');
    return (

      <View style={ styles.view }>
       <View  style={styles.style_text}>
          <Text  style={{ color: '#000' }}>
            This is a ListView
          </Text>
        </View>
        <MyListView/>
        <Button
          containerStyle={styles.container}
          style={styles.button}
          onPress={this.createNewItem} >
          增加
        </Button>
        <Button
          containerStyle={styles.container}
          style={styles.button}
          onPress={this.deleteItem} >
          删除
        </Button>
      </View>
    )
  }

});

var styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 45, overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'lightgray'
  },
  button: {
    padding: 10,
    fontSize: 20,
    backgroundColor: 'lightgray',
  },
  view: {
    alignItems: 'center'
  },
  style_text: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:'#63B8FF',  
    borderColor: '#5bc0de',
    height: 45,
    width: 180,
    fontSize: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = MyButtonController;
