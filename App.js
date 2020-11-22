import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableHighlight } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.button}
        onPress={() => setBackgroundColor("green")}>green</Text>
      <Text style={styles.button}
        onPress={() => setBackgroundColor("red")}>red</Text>
      <Text>You clicked {count} times.</Text>
      <Button title="Click me" onPress={() => setCount(count+1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
});