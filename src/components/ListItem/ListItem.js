import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

class ListItem extends Component {
  render() {
    const {
      onRemovePress,
      onTogglePress,
      place: { key, isCompleted, text }
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onTogglePress(key)}>
        <View style={isCompleted ? styles.afterClicked : styles.beforeClicked}>
          <Text style={isCompleted ? styles.afterText : styles.beforeText}>
            {text}
          </Text>
          <Button color={"red"} title="X" onPress={() => onRemovePress(key)} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  beforeClicked: {
    width: "100%",
    marginBottom: 5,
    padding: 12,
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  afterClicked: {
    width: "100%",
    marginBottom: 5,
    padding: 12,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  beforeText: {
    fontSize: 18
  },
  afterText: {
    backgroundColor: "grey",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 18
  }
});

export default ListItem;
