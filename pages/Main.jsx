import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  statusbar,
} from "react-native";

export default function Main({ route }) {
  const { res } = route.params ? route.params : "";
  const [inputVal, setInputVal] = useState(res);
  const [changedVal, setChangedVal] = useState("");

  useEffect(() => {
    setInputVal(res);
  }, [res]);

  const post_gpt = async (val) => {
    const response = await fetch("http://172.30.1.75:5000/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: val }),
    });
    const data = await response.json();
    setChangedVal(data.result);
  };
  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.changeAB}>변경 전</Text>
          <TextInput
            style={styles.input}
            value={inputVal}
            multiline
            numberOfLines={4}
            onChangeText={(text) => setInputVal(text)}
          />
          <TouchableOpacity
            onPress={() => {
              if (inputVal != "") {
                post_gpt(inputVal);
              }
            }}
          >
            <Text style={styles.change}>변환</Text>
          </TouchableOpacity>
          <Text style={styles.changeAB}>변경 후</Text>
          <Text style={styles.input}>{changedVal}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  change: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 50,
    fontSize: 20,
  },
  changeAB: {
    marginTop: 50,
    fontSize: 20,
  },
  input: {
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
