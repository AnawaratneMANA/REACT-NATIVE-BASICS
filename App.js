/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { StyleSheet, Text, View, Button, Linking } from "react-native";

const App: () => Node = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Click Here to Navigate to the YouTube.</Text>
      <Button title="Open YouTube" onPress={() => {Linking.openURL('https://www.youtube.com/')}}> Open YouTube.</Button>
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
