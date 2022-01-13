/**
 * Example showing how to link navigate from the Button.
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import type { Node } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

const App: () => Node = () => {

  // Single Value State.
  const [name, setName] = useState("Original Name");

  // Multi-value state.
  const [session, setSession] = useState({number: 5, title: 'Original Title'});

  const onClickHandler = () => {
    setName("Update Name.");
    setSession({number: 8, title: 'Updated Title'});
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <Text style={styles.text}> Session Number: {session.number}  Session Title: {session.title}</Text>
      <Button title="Update the Name" onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10
  }
});

export default App;
