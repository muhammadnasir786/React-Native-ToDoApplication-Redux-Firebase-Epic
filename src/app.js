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
      value: ""
    };
  }
  componentDidMount() {
    this.props.getToDos();
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
            this.props.addToDo(toDoObj);
          }}
        />
        {this.props.todos !== undefined
          ? Object.keys(this.props.todos).map((val, i) => {
              let todo = this.props.todos[val];
              return (
                <Item
                  index={val}
                  key={val}
                  todo={todo}
                  deleteToDo={this.props.deleteToDo}
                  updateToDo={this.props.updateToDo}
                  completedToDo={this.props.completedToDo}
                />
              );
            })
          : null}
      </View>
    );
  }
}

// export default MainApp;
let mapStateToProps = state => {
  return {
    todos: state.toDoReducer.todos
  };
};
let mapDispatchToProps = dispatch => {
  return {
    getToDos: () => {
      dispatch(ToDoAction.getToDo());
    },
    deleteToDo: data => {
      dispatch(ToDoAction.deleteToDo(data));
    },
    addToDo: data => {
      dispatch(ToDoAction.addToDo(data));
    },
    updateToDo: data => {
      dispatch(ToDoAction.updateToDo(data));
    },
    completedToDo: data => {
      dispatch(ToDoAction.completedToDo(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
// export default MainApp;
console.log("Nasir");
