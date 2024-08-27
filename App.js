import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setEnteredNumber(parseInt(pickedNumber)); // Ensure enteredNumber is stored as an integer
    setGameOver(false);
  }

  useEffect(() => {
    console.log("enteredNumber: " + enteredNumber);
  }, [enteredNumber]);

  function gamerOverHandler() {
    setGameOver(true);
  }

  function startNewGameHandler() {
    setEnteredNumber(null);
    setGameOver(true);
    setRounds(null);
  }

  let screen = <StartGameScreen onPickNo={pickedNumberHandler} />;

  if (enteredNumber && gameOver) {
    screen = (
      <GameOverScreen
        roundNo={rounds}
        userNo={enteredNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  } else if (enteredNumber) {
    screen = (
      <GameScreen userNumber={enteredNumber} gameOver={gamerOverHandler} />
    );
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
