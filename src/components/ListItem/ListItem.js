import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChanged: false
    };
  }
  onItemPressedHandler = () => {
    this.setState({
      isChanged: !this.state.isChanged
    });
  };
  render() {
    return (
      <TouchableOpacity onPress={this.onItemPressedHandler}>
        <View
          style={
            this.state.isChanged ? styles.afterClicked : styles.beforeClicked
          }
        >
          <Text
            style={this.state.isChanged ? styles.afterText : styles.beforeText}
          >
            {this.props.placeName}
          </Text>
          <Button
            color={"red"}
            title="X"
            onPress={() => this.props.onItemPressed(this.props.index)}
          />
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
