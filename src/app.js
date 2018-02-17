import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ScrollView
} from "react-native";
// import Greeting from "./greeting";
import { connect } from "react-redux";
import ToDoAction from "./store/actions/todoAction";
import Item from "./item";
class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todos: ["Nasir"]
    };
  }
  componentDidMount() {
    // this.props.getToDos();
  }
  deleteToDo = (start)=>{
    this.state.todos.splice(start,1);
    this.setState({ todos : this.state.todos})
  }
  editTodo = (index,newValue) =>{
    this.state.todos.splice(index,1,newValue);
    this.setState({ todos : this.state.todos})
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={text => {
            this.setState({ value: text });
          }}
          value={this.state.value}
        />
        <Button
          title="Add ToDo"
          onPress={() => {
            let toDoObj = {
              todo: this.state.value,
              completed: false
            };
            this.state.todos.push(this.state.value);
            this.setState({ todos: this.state.todos, value: "" });
          }}
        />
          {this.state.todos.map((val, i) => {
            return (
              <Item editToDo={this.editTodo} index={i} key={i} todo={val} deleteToDo={this.deleteToDo}/>
            );
          })}
      </View>
    );
  }
}

// export default MainApp;
// let mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };
// let mapDispatchToProps = dispatch => {
//   return {
//     getToDos: () => {
//       dispatch(ToDoAction.getToDo());
//     }
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
export default MainApp;
