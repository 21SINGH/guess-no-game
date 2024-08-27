import { Text, StyleSheet} from "react-native";
import colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily : 'boeing',
    fontSize: 25,
    // fontWeight: "bold",
    textAlign: "center",
    // borderWidth: 1,
    color: colors.text,
    backgroundColor : 'transparent',
  },
});
