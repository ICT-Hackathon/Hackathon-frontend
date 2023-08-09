import { Text, View, StyleSheet } from "react-native";

export default function Main({ route }) {
  const { res } = route.params ? route.params : "";
  return (
    <View style={styles.container}>
      <Text>{res}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
