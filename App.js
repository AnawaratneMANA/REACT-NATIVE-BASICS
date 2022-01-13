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
      <View style={styles.view1}>
        <Text style={styles.text}> 1 </Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}> 2 </Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text}> 3 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 400,
    width: 400,
    backgroundColor: "#bebebe",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
    textTransform: "uppercase"
  },
  view1: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  view2: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#818181"
  },
});

export default App;
