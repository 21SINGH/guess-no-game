import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons"

let minBound = 1;
let maxBound = 100;

export default function GameScreen({ userNumber, gameOver }) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  useEffect(() => {
    minBound = 1;
    maxBound = 100;
  },[])

  useEffect(() => {
    if (currentGuess === userNumber) {
      console.log("number matched");
      gameOver();
    }
  }, [currentGuess, userNumber, gameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know this is wrong...", [
        { text: "Soory u lied", style: "cancel" },
      ]);
      return;
    } else {
      if (direction === "lower") {
        maxBound = currentGuess;
      } else {
        minBound = currentGuess + 1;
      }
      const newRndNO = generateRandomBetween(minBound, maxBound, currentGuess);
      setCurrentGuess(newRndNO);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Title>Oponents Game</Title>
      </View>
      <View style={styles.secondContainer}>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>

      <View style={styles.thirdContainer}>
        <Title>Heigher or Lower ?</Title>
        <View style={styles.buttonContiner}>
          <View style={styles.buttonElement}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove-circle-outline" size={20} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonElement}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add-circle-outline" size={20} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    marginHorizontal: 50,
    marginVertical: 200,
    backgroundColor: "black",
    borderRadius: 8,
    elevation: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 1,
    // alignItems : "center",
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%", // Ensures the text takes up the full width of its container
    // marginBottom: 30,
    flex: 1,
    // padding:10
  },
  secondContainer: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%", // Ensures the text takes up the full width of its container
    marginBottom: 30,
    justifyContent: "center",
  },
  thirdContainer: {
    flex: 2,
  },

  text: {
    color: colors.text,
  },
  buttonContiner: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonElement: {
    flex: 1,
  },
});

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
