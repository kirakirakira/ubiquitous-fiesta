import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableHighlight } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableHighlight style={styles.button}
        onPress={() => setBackgroundColor("yellow")}
        underlayColor="orange"
      >
        <View>
          <View style={styles.sample} />
          <Text style={styles.buttonText, { backgroundColor: "yellow" }}>Yellow</Text>
        </View>
      </TouchableHighlight>
      <Text>You clicked {count} times.</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)}></Button>
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
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "red"
  }
});