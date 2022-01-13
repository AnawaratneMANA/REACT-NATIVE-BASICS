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
    <View style={{
      backgroundColor: "#4a4a4a",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    }}>
      <Text style={styles.text}> {name} </Text>
      <Button title="Update the Session" onPress={onClickHandler}></Button>
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
