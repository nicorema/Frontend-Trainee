import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btn}><Button title='ADD' onPress={addGoalHandler} /></View>
          <View style={styles.btn}><Button title='CANCEL' color='red' onPress={onCancel} /></View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  btnsContainer: {
    width:'70%',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn:{
    flex:1,
    marginHorizontal:10
  }
});

export default GoalInput;
