import React, { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList, Alert } from "react-native";
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";

let id = 1;

const useColors = () => {
  const [colors, setColors] = useState([]);
  const addColor = color => {
    id++;
    const newColor = { id: id.toString(), color };
    setColors([newColor, ...colors]);
  }
  return { colors, addColor }
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor} />
          )
        }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex"
  }
});