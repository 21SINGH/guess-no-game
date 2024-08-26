import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
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
    screen = <GameScreen  userNumber={enteredNumber}/>;
  }

  return (
    <LinearGradient
      colors={["gray", "black", "purple"]}
      style={styles.rootScreen}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
