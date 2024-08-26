import { TextInput, View , StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton> RESET</PrimaryButton>
      <PrimaryButton> Confirm </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer :{
        padding: 16,
        marginHorizontal : 24,
        marginTop: 100,
        backgroundColor : '#72063c',
        borderRadius: 8,
        elevation : 4,
        shadowColor : "black",
        shadowOffset : {width : 0, height : 2}, 
        shadowRadius : 10,
        shadowOpacity : 0.4,
    }
})
