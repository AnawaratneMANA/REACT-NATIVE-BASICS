/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: () => Node = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> This is the Beginner Tutorial of React Native.</Text>
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
    color: "white"
  }
});

export default App;
