import { Text, StyleSheet, View } from "react-native";

export default function GuessLogItem({ roundNo , guess }) {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>#{roundNo}</Text>
      <Text style={styles.text}>Oponents Guess : {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    backgroundColor: "#353935",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    color: "white",
    borderRadius: 10,
    marginVertical :5,
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  text:{
    color: "white",
    opacity : 1,
    fontSize : 18,
    fontWeight: "bold",
    textAlign : "center",
  }
});
