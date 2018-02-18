import React, { Component } from "react";
import { Alert, View, Text, TextInput, Button, FlatList } from "react-native";
import Greeting from "./greeting";
import { connect } from "react-redux";
import ToDoAction from "./store/actions/todoAction";
class Item extends Component {
  constructor() {
    super();
    this.state = {
      updatedValue: "",
      isEdit: false
    };
  }
  _onPressButton() {
    Alert.alert("alert");
  }

  render() {
    return (
      <View>
        {this.state.isEdit ? (
          <TextInput
            onChangeText={text => {
              this.setState({ updatedValue: text });
            }}
            value={this.state.updatedValue}
          />
        ) : (
          <Text>{`${this.props.todo.todo}\n`}</Text>
        )}
        <Button onPress={()=>{
          this.props.deleteToDo(this.props.index);
        }}
          title="Delete!"
        />
        <Button onPress={()=>{
          if(this.props.todo.completed){
          }else{
            this.props.completedToDo(this.props.index)

          }
          // this.props.deleteToDo(this.props.index);
        }}
          title={!this.props.todo.completed ? 'In Completed' : 'Complete'}
        />
        <Button
          onPress={()=>{
            if(this.state.isEdit){
              let forPayload = {
                key : this.props.index,
                val : this.state.updatedValue
              }
              this.props.updateToDo(forPayload)
              this.setState({ isEdit : !this.state.isEdit , updatedValue : ''})
            }else{
              this.setState({ updatedValue : this.props.todo.todo , isEdit : !this.state.isEdit})
            }
          }}
          title={this.state.isEdit ? "Update" : "Edit"}
          color="#841584"
        />
      </View>
    );
  }
}

// export default MainApp;
// let mapStateToProps = (state) =>{
//   return {
//   }
// }
// let mapDispatchToProps = (dispatch)=>{
//   return {
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Item)

export default Item;
