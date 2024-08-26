import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [enteredNumber, setenteredNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setenteredNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNo={pickedNumberHandler} />;

  if (enteredNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={["gray", "black", "purple"]}
      style={styles.rootScreen}
    >
      {screen}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
