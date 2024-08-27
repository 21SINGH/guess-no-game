import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({roundNo, userNo, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/game-over.jpeg")}
        />
      </View>
      <Text style={styles.text}>
        Your Phone needed <Text style={styles.heilight}>{roundNo}</Text> round to guess
        the <Text style={styles.heilight}>{userNo}</Text> no
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Play Again</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding : 30
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "purple",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontFamily: "boeing",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  heilight: {
    color: "greenyellow",
    fontFamily: "boeing",
  },
});
