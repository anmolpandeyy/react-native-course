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
  Button,
  ScrollView
} from "react-native";

import ListItem from "./src/components/ListItem/ListItem";

export default class App extends Component {
  state = {
    placeName: "",
    places: [{ key: "1", text: "foo", isCompleted: false }]
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
      const todo = {
        key: new Date().getTime(),
        text: this.state.placeName,
        isCompleted: false
      };

      return {
        places: prevState.places.concat(todo),
        placeName: ""
      };
    });
  };

  onRemovePressHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  onTogglePressHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.map(place => {
          return place.key === key
            ? {
                key: place.key,
                text: place.text,
                isCompleted: !place.isCompleted
              }
            : place;
        })
      };
    });
  };

  render() {
    const { placeName, places } = this.state;

    const placesOutput = places.map(place => {
      return (
        <ListItem
          key={place.key}
          place={place}
          onRemovePress={this.onRemovePressHandler}
          onTogglePress={this.onTogglePressHandler}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your task"
            value={placeName}
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
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
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
