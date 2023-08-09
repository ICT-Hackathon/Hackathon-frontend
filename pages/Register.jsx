import { Text, View, StyleSheet, Image } from "react-native";
import { Asset, useAssets } from 'expo-asset';

export default function Register() {
  const [assets] = useAssets([require('../assets/logo.svg')]);
  console.log(assets)
  return (
    <View style={styles.container}>
      {assets && <Image
        style={{ width: 125, marginTop: 20 }}
        source={assets.uri}
      />}
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
