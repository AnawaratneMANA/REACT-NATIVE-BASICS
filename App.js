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
  const [name, setName] = useState("Inline styling");

  const onClickHandler = () => {
    setName("Update Name.");
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name} </Text>
      <View style={styles.button}>
        <Button title="Update the Session" onPress={onClickHandler}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "50%",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#4a4a4a",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
    textTransform: "uppercase"
  },
  button: {
    width: 200,
    height: 60
  }
});

export default App;
