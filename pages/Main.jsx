import { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function Main({ route }) {
  const { res } = route.params ? route.params : "";
  const [inputVal, setInputVal] = useState(res);
  const [changedVal, setChangedVal] = useState("");
  const [selectedValue, setSelectedValue] = useState("쉽게");

  useEffect(() => {
    setInputVal(res);
  }, [res]);

  const post_gpt = async (val) => {
    const response = await fetch("http://172.30.1.73:5000/api/gpt", {
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
      <View style={styles.picker}>
        <Picker
          style={styles.picker2}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="쉽게" value="쉽게" />
          <Picker.Item label="알맞게" value="알맞게" />
        </Picker>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.changeAB}>변경 전</Text>
            <TextInput
              onSubmitEditing={() => {
                if (inputVal != "") {
                  post_gpt(inputVal);
                }
              }}
              placeholder="여기를 눌러서 입력하세요"
              style={[
                styles.inputBefore,
                { textAlignVertical: "top", textAlign: "left", flexShrink: 1 },
              ]}
              value={inputVal}
              multiline={true}
              blurOnSubmit={true}
              onChangeText={(text) => setInputVal(text)}
            />
          </View>
          <View style={styles.line}></View>
          <View style={styles.leftContainer}>
            <Text style={styles.changeAB}>변경 후</Text>
            <Text style={styles.inputAfter} multiline numberOfLines={12}>
              {changedVal}
            </Text>
          </View>
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
  picker: {
    backgroundColor: "#024194",
    borderRadius: 100,
    marginRight: 130,
    marginLeft: 130,
    marginTop: 50,
    borderRadius: 15,
    borderWidth: 0,
    overflow: "hidden",
    height: 55,
    padding: 0,
  },
  picker2: {
    color: "white",
    fontSize: 5,
    fontWeight: "900",
  },
  line: {
    backgroundColor: "grey",
    marginTop: 150,
    width: 1000,
    height: 0.5,
    padding: 2,
  },
  change: {
    backgroundColor: "skyblue",
    marginTop: 50,
    padding: 15,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  changeAB: {
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 13,
    fontSize: 22,
  },
  inputBefore: {
    width: 300,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    fontSize: 16,
  },
  inputAfter: {
    width: 300,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    fontSize: 16,
  },
});
