import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = ({children,onDelete,goalId}) => (
  <TouchableOpacity onPress={()=>onDelete(goalId)}>
    <View style={styles.listItem}>
      <Text>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
