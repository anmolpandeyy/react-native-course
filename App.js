/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

import ListItem from "./src/components/ListItem/ListItem";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  onPressButtonHandler = prevState => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ""
      };
    });
  };
  onItemPressedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      return (
        <ListItem
          key={i.toString()}
          placeName={place}
          index={i}
          onItemPressed={this.onItemPressedHandler}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your task"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button
            onPress={this.onPressButtonHandler}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.placeButton}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
  },
  inputContainer: {
    // flex: 1,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "60%"
  },
  placeButton: {
    width: "40%"
  },
  listContainer: {
    width: "100%"
  }
});
