import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
      >
        <View style={styles.continer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "gray",
    opacity: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    color: "white",
  },
  text: {
    color: "white",
    opacity: 1,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: "plum",
  },
});
