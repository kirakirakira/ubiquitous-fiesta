import { useEffect, useState } from "react";
import { AsyncStorage } from 'react-native';

let id = 1;

export const useColors = () => {
  const [colors, setColors] = useState([]);
  id++;

  const loadColors = async () => {
      const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
      if (colorData) {
          const colors = JSON.parse(colorData);
          setColors(colors);
      }
  }

  // Load colors
  useEffect(() => {
      if (colors.length) return;
      loadColors();
  }, []);

  // Save colors
  useEffect(() => {
      AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = color => {
    const newColor = { id: id.toString(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};