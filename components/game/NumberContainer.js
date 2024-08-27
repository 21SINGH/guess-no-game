import { Text, StyleSheet, View } from "react-native";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>{children}</Text>
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
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    color: "white",
    borderRadius: 10,
  },
  text:{
    color: "white",
    opacity : 1,
    fontSize : 18,
    fontWeight: "bold",
    textAlign : "center",
  }
});
