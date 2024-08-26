import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";

export default function StartGameScreen({ onPickNo }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function noInputHandler(inputNo) {
    setEnteredNumber(inputNo);
  }

  function restInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: restInputHandler },
      ]);
      return;
    }

    onPickNo(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={noInputHandler} // Changed from onChange to onChangeText
      />
      <View style={styles.buttonContiner}>
        <View style={styles.buttonElement}>
          <PrimaryButton onPress={restInputHandler}>RESET</PrimaryButton>
        </View>
        <View style={styles.buttonElement}>
          <PrimaryButton onPress={confirmInputHandler}>START</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: colors.background,
    borderRadius: 8,
    elevation: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    color: colors.text,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContiner: {
    marginTop: 5,
    flexDirection: "row",
  },
  buttonElement: {
    flex: 1,
  },
});
