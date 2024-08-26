import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer} >
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize="none" />
      <View style={styles.buttonContiner}>
        <View style={styles.buttonElement}>
      <PrimaryButton> RESET</PrimaryButton>
      </View>
      <View style={styles.buttonElement}>
      <PrimaryButton> START </PrimaryButton>
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
    backgroundColor: "black",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "purple",
    shadowOffset: { width: 1, height: 4},
    shadowRadius: 5,
    shadowOpacity: 1,
    alignItems : "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign : "center",
  },
  buttonContiner : {
    marginTop : 5,
    flexDirection : "row",
    // justifyContent : "space-around",
    // width : "60%"
  },
  buttonElement:{
    flex: 1,
  }
});
