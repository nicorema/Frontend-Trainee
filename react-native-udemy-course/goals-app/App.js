import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
  };

  const changeModalVisibilityHandler = () => {
    setIsAddMode(true);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={changeModalVisibilityHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={deleteGoalHandler} goalId={itemData.item.id}>
            {itemData.item.value}
          </GoalItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
